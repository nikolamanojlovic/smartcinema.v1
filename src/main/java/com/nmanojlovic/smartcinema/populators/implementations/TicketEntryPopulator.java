package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.TicketEntryData;
import com.nmanojlovic.smartcinema.models.TicketEntry;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Component(value = "ticketEntryPopulator")
public class TicketEntryPopulator implements ISuperPopulator<TicketEntry, TicketEntryData> {

    @Resource(name = "reservationPopulator")
    private ReservationPopulator reservationPopulator;

    @Override
    public TicketEntryData populate(TicketEntry model) {
        TicketEntryData data = new TicketEntryData();
        data.setOn(model.getOn());
        data.setReservation(reservationPopulator.populate(model.getReservation()));

        return data;
    }

    @Override
    public List<TicketEntryData> populateList(List<TicketEntry> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
