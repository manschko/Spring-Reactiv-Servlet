package com.example.reactive.repository.vendor;

import com.example.reactive.model.Vendor;
import reactor.core.publisher.Mono;

import java.util.List;

public interface ExVendorRepository {


    Mono<List<Vendor>> findAllVendors();

    Mono<Vendor> findVendorById(Long id);
}
