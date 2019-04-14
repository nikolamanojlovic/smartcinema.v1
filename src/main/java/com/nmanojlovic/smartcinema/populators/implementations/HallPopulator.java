package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.HallData;
import com.nmanojlovic.smartcinema.models.Hall;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component(value = "hallPopulator")
public class HallPopulator implements ISuperPopulator<Hall, HallData> {

    @Override
    public HallData populate(Hall model) {
        HallData data = new HallData();
        data.setId(model.getId());
        data.setName(model.getName());

        return data;
    }

    @Override
    public List<HallData> populateList(List<Hall> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
