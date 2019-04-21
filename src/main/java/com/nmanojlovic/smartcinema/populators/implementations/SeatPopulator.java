package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.SeatData;
import com.nmanojlovic.smartcinema.models.Seat;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component(value = "seatPopulator")
public class SeatPopulator implements ISuperPopulator<Seat, SeatData> {

    @Override
    public SeatData populate(Seat model) {
        SeatData data = new SeatData();
        data.setNumber(model.getSeatId().getNumber());
        data.setRow(model.getSeatId().getRow());

        return data;
    }

    @Override
    public List<SeatData> populateList(List<Seat> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
