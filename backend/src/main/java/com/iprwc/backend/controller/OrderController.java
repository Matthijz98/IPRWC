package com.iprwc.backend.controller;
import com.iprwc.backend.model.Order;
import com.iprwc.backend.repository.OrderRepsoitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderRepsoitory orderRepsoitory;

    @GetMapping("/private/orders/")
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam(required = false) String title){
        try {
            List<Order> orders = orderRepsoitory.findAll();

            if (orders.isEmpty()) {
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.internalServerError().build();
        }
    }

}
