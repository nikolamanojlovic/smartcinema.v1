package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.models.AbstractUser;

import java.util.Optional;

public interface IUserService {

    Optional<AbstractUser> findUserByEmail(String email);

    Optional<AbstractUser> findUserByCredentials(String email, String password);
}
