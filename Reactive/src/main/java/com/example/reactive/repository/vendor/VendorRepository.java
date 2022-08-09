package com.example.reactive.repository.vendor;

import com.example.reactive.model.Vendor;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends ReactiveCrudRepository<Vendor, Long>, ExVendorRepository {

}
