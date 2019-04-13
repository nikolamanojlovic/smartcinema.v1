package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.UserData;
import com.nmanojlovic.smartcinema.models.User;

import java.util.Optional;

public interface IUserService {

    Optional<UserData> findUserByEmail(String email);

    Optional<UserData> findUserByCredentials(String email, String password);
}
