package com.iprwc.backend.controller;
import com.iprwc.backend.model.Order;
import com.iprwc.backend.model.Product;
import com.iprwc.backend.repository.OrderRepsoitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {

    @Autowired
    OrderRepsoitory orderRepository;

    @GetMapping("/private/orders/")
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam(required = false) String title){
        try {
            List<Order> orders = orderRepository.findAll();

            if (orders.isEmpty()) {
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/private/orders/{id}")
    public ResponseEntity<Order> getProductById(@PathVariable("id") long id) {
        Optional<Order> orderData = orderRepository.findById(id);

        if (orderData.isPresent()) {
            return new ResponseEntity<>(orderData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
