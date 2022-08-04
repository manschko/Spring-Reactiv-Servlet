package com.example.reactive.repository.product;

import com.example.reactive.mapper.ProductMapper;
import com.example.reactive.model.Product;
import org.springframework.r2dbc.core.DatabaseClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public class ExProductRepositoryImpl implements ExProductRepository {

    //two dependencies available
    private DatabaseClient client;


    public ExProductRepositoryImpl(DatabaseClient client) {
        this.client = client;
    }

    @Override
    public Flux<Product> findAllProducts() {
        String query = "SELECT * FROM product";
        ProductMapper mapper = new ProductMapper();

        Mono<List<Product>> result = this.client.sql(query).map(mapper:apply).all();
        return null;
    }

    @Override
    public Flux<Product> findAllProductsByVendorId(Long vendorId) {
        return null;
    }

    @Override
    public Flux<Product> findAllProductsByCategoryId(Long categoryId) {
        return null;
    }

    @Override
    public Flux<Product> findProductById(Long id) {
        return null;
    }
}

