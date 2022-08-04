package com.example.reactive.mapper;

import com.example.reactive.model.Product;
import io.r2dbc.spi.Row;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.scheduling.config.Task;

import java.util.function.BiFunction;

public class ProductMapper implements BiFunction<Row, Object, Product> {

    @Override
    public Product apply(Row row, Object o) {
        Long id = row.get("id", Long.class);
        return null;
    }
}
