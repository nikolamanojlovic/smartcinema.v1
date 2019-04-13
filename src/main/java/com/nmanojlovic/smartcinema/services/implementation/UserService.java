package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.data.UserData;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.hibernate.validator.constraints.pl.REGON;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

@Service("userService")
public class UserService implements IUserService {

    @Resource(name = "userDao")
    private IUserDao userDao;

    @Resource(name = "userPopulator")
    private ISuperPopulator<User, UserData> userPopulator;

    @Override
    public Optional<UserData> findUserByEmail(String email) {
        return Optional.ofNullable(userPopulator.populate(userDao.findById(email)));
    }

    @Override
    public Optional<UserData> findUserByCredentials(String email, String password) {
        return Optional.ofNullable(userPopulator.populate(userDao.findUserByCredentials(email, password)));
    }
}
