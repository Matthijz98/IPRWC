package com.iprwc.backend.model;


import jakarta.persistence.*;

@Entity
@Table(name="order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "quantity")
    private int quantity;

    @ManyToOne()
    @JoinColumn(name = "product_id")
    private Product productId;

    @ManyToOne()
    @JoinColumn(name = "order_id")
    private Order orderId;

}
