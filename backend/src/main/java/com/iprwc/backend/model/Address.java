package com.iprwc.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name="address")
public class Address {
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

    public Address(String fullName, String street, String number, String city) {
        this.fullName = fullName;
        this.street = street;
        this.number = number;
        this.city = city;
    }
}
