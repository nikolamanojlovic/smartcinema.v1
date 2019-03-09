package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.models.User;

public interface IUserDao extends ISuperDao<User, String> {

    User findUserByCredentials(String email, String password);
}
