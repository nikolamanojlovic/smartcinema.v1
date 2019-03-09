package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.DatabaseConstants;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userDao")
public class UserDao extends SuperDao<User, String> implements IUserDao {

    public UserDao() {
        this.model = User.class;
    }

    @Override
    protected String getModelName() {
        return  " " + User.class.getSimpleName() + " ";
    }

    @Override
    public User findUserByCredentials(String email, String password) {
        String[] query = {DatabaseConstants.FROM.name(), getModelName(), DatabaseConstants.WHERE.name(),
                          DatabaseConstants.EMAIL.name(), "=", "'" + email + "'", DatabaseConstants.AND.name(),
                          DatabaseConstants.PASSWORD.name(), "=", "'" + password + "'"};

        List<User> result = getEntityManager().createQuery(String.join(SPACE_SEPARATOR, query)).getResultList();
        if ( result != null && result.size() > 0 ) {
            result.get(0);
        }
        return null;
    }
}
