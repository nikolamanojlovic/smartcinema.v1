package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.models.User;

import java.util.Optional;

public interface IUserService {

    Optional<User> findUserByEmail(String email);

    Optional<User> findUserByCredentials(String email, String password);
}
