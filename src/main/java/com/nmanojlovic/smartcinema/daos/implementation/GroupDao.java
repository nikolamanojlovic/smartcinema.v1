package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.daos.IGroupDao;
import com.nmanojlovic.smartcinema.models.BuffGroup;
import org.springframework.stereotype.Repository;

@Repository("groupDao")
public class GroupDao extends SuperDao<BuffGroup, Long> implements IGroupDao {

    public GroupDao() {
        this.model = BuffGroup.class;
    }

    @Override
    protected String getModelName() {
        return " " + BuffGroup.class.getSimpleName() + " ";
    }
}
