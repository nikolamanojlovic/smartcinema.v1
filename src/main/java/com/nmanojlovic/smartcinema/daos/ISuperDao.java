package com.nmanojlovic.smartcinema.daos;

import java.io.Serializable;
import java.util.List;

public interface ISuperDao <T, K extends Serializable> {

    void create(T entity);

    T update(T entity);

    void delete(T entity);

    T findById(K id);

    List<T> findAll();
}
