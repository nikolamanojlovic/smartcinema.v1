package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.models.AbstractUser;

public interface IUserDao extends ISuperDao<AbstractUser, String> {

    AbstractUser findUserByCredentials(String email, String password);
}
