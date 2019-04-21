package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.ITicketDao;
import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.data.UserData;
import com.nmanojlovic.smartcinema.models.Ticket;
import com.nmanojlovic.smartcinema.services.ITicketService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("ticketService")
public class TicketService implements ITicketService {

    @Resource(name = "ticketDao")
    private ITicketDao ticketDao;

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
