package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.models.Ticket;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Component(value = "ticketPopulator")
public class TicketPopulator implements ISuperPopulator<Ticket, TicketData> {

    @Resource(name = "ticketEntryPopulator")
    private TicketEntryPopulator ticketEntryPopulator;

    @Override
    public TicketData populate(Ticket model) {
        TicketData data = new TicketData();
        data.setId(model.getId());
        data.setPrice(model.getPrice());
        data.setId(model.getId());
        data.setEntries(ticketEntryPopulator.populateList(model.getEntries()));

        return data;
    }

    @Override
    public List<TicketData> populateList(List<Ticket> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
