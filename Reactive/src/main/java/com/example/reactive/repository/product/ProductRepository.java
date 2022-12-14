package com.example.reactive.repository.product;

import com.example.reactive.model.Product;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends ReactiveCrudRepository<Product, Long>, ExProductRepository {

}
