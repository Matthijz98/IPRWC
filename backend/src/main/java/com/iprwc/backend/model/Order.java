package com.iprwc.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "order_total")
    private Number orderTotal;

    @Column(name = "order_date")
    private String orderDate;

    @Column(name = "order_status")
    private String orderStatus;

    @Column(name = "by_user")
    private String byUser;

}
