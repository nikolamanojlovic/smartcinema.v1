package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.ISuperDao;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.List;

@Repository("superDao")
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public abstract class SuperDao<T, K extends Serializable> implements ISuperDao<T, K> {

    public static String SPACE_SEPARATOR = " ";

    protected Class<? extends T> model;

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void create(T entity) {
        getEntityManager().persist(entity);
    }

    public T update(T entity) {
        return getEntityManager().merge(entity);
    }

    public void delete(T entity) {
        getEntityManager().remove(entity);
    }

    public T findById(K id) {
        return getEntityManager().find(model, id);
    }

    public List<T> findAll() {
        return entityManager.createQuery(Constants.FROM + getModelName()).getResultList();
    }

    protected EntityManager getEntityManager() {
        return entityManager;
    }

    protected abstract String getModelName();
}