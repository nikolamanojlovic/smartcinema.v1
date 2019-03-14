package com.nmanojlovic.smartcinema;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.List;

@Component
public class SmartCinemaBDSeederEvent {

    @Resource(name = "userDao")
    private IUserDao userDao;

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        seedUserTable();
    }

    private void seedUserTable() {
        List<User> users = Arrays.asList(
                new User("manojlovic.nikola@gmail.com", "nikola", "Nikola",
                        "Manojlović", Constants.MALE, DateUtils.getDateFromString("03/07/1995"),
                        "Belgrade", "Serbia", null)
        );

        users.forEach(user -> userDao.create(user));
    }
}
