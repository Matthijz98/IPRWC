package com.iprwc.backend.repository;

import com.iprwc.backend.model.Order;
import com.iprwc.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long>{

    List<Order> findByByUser(User byId);
}
