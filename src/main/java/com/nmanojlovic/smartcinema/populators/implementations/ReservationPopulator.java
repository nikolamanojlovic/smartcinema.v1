package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.ReservationData;
import com.nmanojlovic.smartcinema.models.Reservation;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Component(value = "reservationPopulator")
public class ReservationPopulator implements ISuperPopulator<Reservation, ReservationData> {

    @Resource(name = "seatPopulator")
    private SeatPopulator seatPopulator;

    @Resource(name = "projectionPopulator")
    private ProjectionPopulator projectionPopulator;

    @Override
    public ReservationData populate(Reservation model) {
        ReservationData data = new ReservationData();
        data.setSeat(seatPopulator.populate(model.getSeat()));
        data.setProjection(projectionPopulator.populate(model.getProjection()));

        return data;
    }

    @Override
    public List<ReservationData> populateList(List<Reservation> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
