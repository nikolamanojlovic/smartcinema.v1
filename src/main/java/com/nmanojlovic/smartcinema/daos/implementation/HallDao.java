package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.models.Hall;
import org.springframework.stereotype.Repository;

@Repository("hallDao")
public class HallDao extends SuperDao<Hall, Long> implements IHallDao {

    public HallDao() {
        this.model = Hall.class;
    }

    @Override
    protected String getModelName() {
        return " " + Hall.class.getSimpleName() + " ";
    }
}
