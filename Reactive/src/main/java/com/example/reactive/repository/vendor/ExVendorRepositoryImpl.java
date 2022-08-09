package com.example.reactive.repository.vendor;

import com.example.reactive.mapper.ProductMapper;
import com.example.reactive.model.Vendor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.r2dbc.core.DatabaseClient;
import reactor.core.publisher.Mono;

import java.util.List;

public class ExVendorRepositoryImpl implements ExVendorRepository {

    ProductMapper mapper = new ProductMapper();
    //two dependencies a
    @Autowired
    private DatabaseClient client;

    //@Override
    public Mono<List<Vendor>> findAllVendors() {
        String vendorQuery = "SELECT * FROM vendor";
        return client
                .sql(vendorQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::vendor).toList());
    }

    @Override
    public Mono<Vendor> findVendorById(Long id) {
        String vendorQuery = "SELECT * FROM vendor WHERE id = " + id;
        return client
                .sql(vendorQuery)
                .fetch()
                .first().map(mapper::vendor);
    }
}
