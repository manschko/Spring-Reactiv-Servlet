package com.example.reactive.repository.category;

import com.example.reactive.model.Category;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;


public interface CategoryRepository extends ReactiveCrudRepository<Category, Long>{

    public Flux<Category> findAllByName(String name);

    Flux<Category> findFirst50ByOrderByIdAsc();
}
