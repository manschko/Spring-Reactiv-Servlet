package com.example.reactive.repository.category;

import com.example.reactive.model.Category;
import reactor.core.publisher.Mono;

import java.util.List;

public interface ExCategoryRepository {
    Mono<List<Category>> findAllCategories();

    Mono<Category> findCategoryById(Long id);
}
