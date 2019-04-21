package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.TicketData;

public interface ITicketService {

    boolean createTicketForUser(TicketData ticketData);
}
