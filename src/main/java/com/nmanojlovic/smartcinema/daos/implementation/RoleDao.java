package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.daos.IRoleDao;
import com.nmanojlovic.smartcinema.models.Role;
import org.springframework.stereotype.Repository;

@Repository("roleDao")
public class RoleDao extends SuperDao<Role, Long> implements IRoleDao {

    public RoleDao() {
        this.model = Role.class;
    }

    @Override
    protected String getModelName() {
        return " " + Role.class.getSimpleName() + " ";
    }
}
