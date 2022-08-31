package com.example.reactive.repository.vendor;

import com.example.reactive.model.Vendor;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface VendorRepository extends ReactiveCrudRepository<Vendor, Long> {
    Flux<Vendor> findFirst50ByOrderByIdAsc();
}
