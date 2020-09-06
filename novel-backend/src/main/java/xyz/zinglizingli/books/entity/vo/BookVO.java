package xyz.zinglizingli.books.entity.vo;

import xyz.zinglizingli.books.entity.po.Book;

public class BookVO extends Book {

    private String cateName;

    public String getCateName() {
        return cateName;
    }

    public void setCateName(String cateName) {
        this.cateName = cateName;
    }
}
