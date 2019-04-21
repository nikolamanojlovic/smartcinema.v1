package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

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

        Object result = getEntityManager().createQuery(Constants.FROM_WHERE_COMPLEX
                .replace(":table", getModelName())
                .replace(":condition", " email='" + email + "' AND " + "password='" + password + "'"))
                .getSingleResult();
        return (User) result;
    }
}
