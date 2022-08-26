package com.example.servlet.model;

import lombok.Data;

@Data
public class PageRequest {
    Integer page;
    Integer size;


    public Integer getPage() {
        if (page == null)
            return 0;

        return page;
    }

    public Integer getSize() {
        if (size == null)
            return 50;

        return size;
    }
}
