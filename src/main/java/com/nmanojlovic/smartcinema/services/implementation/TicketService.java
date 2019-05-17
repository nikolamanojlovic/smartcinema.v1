package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.ITicketDao;
import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.models.Ticket;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import com.nmanojlovic.smartcinema.services.ITicketService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("ticketService")
public class TicketService implements ITicketService {

    @Resource(name = "ticketDao")
    private ITicketDao ticketDao;

    @Resource(name = "ticketPopulator")
    private ISuperPopulator<Ticket, TicketData> ticketPopulator;

    @Override
    public List<TicketData> getTicketsForCurrentUser(String user) {
        return ticketPopulator.populateList(ticketDao.getTicketsForCurrentUser(user));
    }

    @Override
    public boolean createTicketForUser(TicketData ticketData) {
        try {
            ticketDao.create(ticketDao.depopulateTicketData(ticketData));
            return true;
        } catch (Exception ex) {
            return false;
        }
    }
}
