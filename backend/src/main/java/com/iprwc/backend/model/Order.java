package com.iprwc.backend.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    
}
