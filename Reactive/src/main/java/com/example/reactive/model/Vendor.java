package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.ArrayList;
import java.util.List;

@Data
@Table("vendor")
public class Vendor {
    @Id
    private Long id;

    private String name;

    private String contactNum;

    private String address;

    private List<Product> products;

    public Vendor(Long id, String name, String contactNum, String address) {
        this.products = new ArrayList<>();
        this.id = id;
        this.name = name;
        this.contactNum = contactNum;
        this.address = address;
    }
}
