package com.iprwc.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="adress")
public class Adress {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "street")
    private String street;

    @Column(name = "number")
    private String number;

    @Column(name = "city")
    private String city;

}
