package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.UserData;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component(value = "userPopulator")
public class UserPopulator implements ISuperPopulator<User, UserData> {

    @Override
    public UserData populate(User model) {
        UserData data = new UserData();
        data.setEmail(model.getEmail());
        data.setName(model.getName());
        data.setLastName(model.getLastName());
        data.setSex(model.getSex());
        data.setDateOfBirth(model.getDateOfBirth());
        data.setCity(model.getCity());
        data.setState(model.getState());
        data.setAdmin(model.isAdmin());

        return data;
    }

    @Override
    public List<UserData> populateList(List<User> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
