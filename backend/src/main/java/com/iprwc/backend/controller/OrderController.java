package com.iprwc.backend.controller;

import com.iprwc.backend.dto.AddressDto;
import com.iprwc.backend.dto.CreateOrderDetailDto;
import com.iprwc.backend.dto.CreateOrderDto;
import com.iprwc.backend.dto.UserDto;
import com.iprwc.backend.model.*;
import com.iprwc.backend.repository.*;
import com.iprwc.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/private/orders/")
    public ResponseEntity<List<Order>> getAllOrders() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = (UserDto) authentication.getPrincipal();
        List<Order> orders;

        if (user.getRole() != null && user.getRole().contains("admin") && !user.getRole().contains("none")) {
            orders = orderRepository.findAll();
        } else {
            if (user.getId() != null) {
                orders = orderRepository.findByByUser(userService.findById(user.getId().longValue()));
            } else {
                orders = new ArrayList<>();
            }
        }

        return orders.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(orders);
    }

    @GetMapping("/private/orders/{id}")
    public ResponseEntity<Order> getProductById(@PathVariable("id") long id) {
        return orderRepository.findById(id)
                .map(order -> ResponseEntity.ok(order))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/private/orders")
    public ResponseEntity<Order> createOrder(@RequestBody CreateOrderDto createOrderDto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = (UserDto) authentication.getPrincipal();

        AddressDto addressDto = createOrderDto.getAddress();
        Address address = addressRepository.save(new Address(addressDto.getFullName(), addressDto.getStreet(), addressDto.getNumber(), addressDto.getCity()));

        Order order = new Order();
        order.setAddress(address);
        order.setOrderDate(new Date());
        order.setOrderStatus("pending");
        order.setByUser(userService.findById(createOrderDto.getByUser()));
        order = orderRepository.save(order);

        double orderTotal = 0;
        for (CreateOrderDetailDto orderDetailDto : createOrderDto.getOrderDetails()) {
            Optional<Product> productOptional = productRepository.findById(orderDetailDto.getProductId());
            if (productOptional.isPresent()) {
                OrderDetail orderDetail = new OrderDetail();
                orderDetail.setOrder(order);
                orderDetail.setProduct(productOptional.get());
                orderDetail.setQuantity(orderDetailDto.getQuantity());
                double orderDetailTotal = orderDetail.getProduct().getPrice() * orderDetail.getQuantity();
                orderDetail.setTotal(orderDetailTotal);
                orderDetail = orderDetailRepository.save(orderDetail);
                orderTotal += orderDetailTotal;
            }
        }

        order.setOrderTotal(orderTotal);
        orderRepository.save(order);

        return ResponseEntity.ok(order);
    }
}