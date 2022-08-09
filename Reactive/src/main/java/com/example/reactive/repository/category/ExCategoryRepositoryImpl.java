package com.example.reactive.repository.category;

import com.example.reactive.mapper.ProductMapper;
import com.example.reactive.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.r2dbc.core.DatabaseClient;
import reactor.core.publisher.Mono;

import java.util.List;

public class ExCategoryRepositoryImpl implements ExCategoryRepository {

    ProductMapper mapper = new ProductMapper();
    //two dependencies a
    @Autowired
    private DatabaseClient client;


    @Override
    public Mono<List<Category>> findAllCategories() {
        String categoryQuery = "SELECT * FROM category";
        return client
                .sql(categoryQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::category).toList());
    }

    @Override
    public Mono<Category> findCategoryById(Long id) {
        String categoryQuery = "SELECT * FROM category WHERE id = " + id;
        return client
                .sql(categoryQuery)
                .fetch()
                .first().map(mapper::category);
    }
}


