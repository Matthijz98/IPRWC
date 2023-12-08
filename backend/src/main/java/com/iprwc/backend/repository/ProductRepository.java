package com.iprwc.backend.repository;

import java.util.List;

import com.iprwc.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByTitleContaining(String title);
}
