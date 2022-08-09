package com.example.reactive.repository.category;

import com.example.reactive.model.Category;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;


public interface CategoryRepository extends ReactiveCrudRepository<Category, Long>, ExCategoryRepository {


}
