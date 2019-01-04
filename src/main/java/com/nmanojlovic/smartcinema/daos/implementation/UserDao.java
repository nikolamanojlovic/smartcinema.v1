package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.DatabaseConstants;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.AbstractUser;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userDao")
public class UserDao extends SuperDao<AbstractUser, String> implements IUserDao {

    public UserDao() {
        this.model = AbstractUser.class;
    }

    @Override
    protected String getModelName() {
        return AbstractUser.class.getName();
    }

    @Override
    public AbstractUser findUserByCredentials(String email, String password) {
        String[] query = {DatabaseConstants.FROM.name(), getModelName(), DatabaseConstants.WHERE.name(),
                          DatabaseConstants.EMAIL.name(), "=", "'" + email + "'", DatabaseConstants.AND.name(),
                          DatabaseConstants.PASSWORD.name(), "=", "'" + password + "'"};

        List<AbstractUser> result = getEntityManager().createQuery(String.join(SPACE_SEPARATOR, query)).getResultList();
        if ( result != null && result.size() > 0 ) {
            result.get(0);
        }
        return null;
    }
}
