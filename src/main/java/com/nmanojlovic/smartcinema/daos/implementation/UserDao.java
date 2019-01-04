package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.DatabaseConstants;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.AbstractUser;
import org.springframework.stereotype.Repository;

@Repository("userDao")
public class UserDao extends SuperDao<AbstractUser, String> implements IUserDao {

    public UserDao() {
        this.model = AbstractUser.class;
    }

    @Override
    protected String getModelName() {
        return DatabaseConstants.USER.name();
    }
}
