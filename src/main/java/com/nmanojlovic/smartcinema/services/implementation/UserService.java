package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

@Service("userService")
public class UserService implements IUserService {

    @Resource(name = "userDao")
    private IUserDao userDao;

    @Override
    public Optional<User> findUserByEmail(String email) {
        return Optional.ofNullable(userDao.findById(email));
    }

    @Override
    public Optional<User> findUserByCredentials(String email, String password) {
        return Optional.ofNullable(userDao.findUserByCredentials(email, password));
    }
}
