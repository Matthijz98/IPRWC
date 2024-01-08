package com.iprwc.backend.repository;

import java.util.List;

import com.iprwc.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepsoitory extends JpaRepository<Order, Long>{

}
