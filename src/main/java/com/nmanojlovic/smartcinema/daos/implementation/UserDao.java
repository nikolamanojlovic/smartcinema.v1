package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.User;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userDao")
public class UserDao extends SuperDao<User, String> implements IUserDao {

    public UserDao() {
        this.model = User.class;
    }

    @Override
    protected String getModelName() {
        return " " + User.class.getSimpleName() + " ";
    }

    @Override
    public User findUserByCredentials(String email, String password) {
        if (StringUtils.isBlank(email) || StringUtils.isBlank(password)) {
            return null;
        }
        String[] query = {Constants.FROM, getModelName(), Constants.WHERE, Constants.EMAIL, "=", "'" +
                email + "'", Constants.AND, Constants.PASSWORD, "=", "'" + password + "'"};

        List<User> result = getEntityManager().createQuery(String.join(SPACE_SEPARATOR, query)).getResultList();
        return CollectionUtils.isNotEmpty(result) ? result.get(0) : null;
    }
}
