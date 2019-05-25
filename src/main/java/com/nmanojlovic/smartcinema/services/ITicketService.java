package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.TicketData;

import java.util.List;

public interface ITicketService {

    List<TicketData> getTicketsForCurrentUser(String user);

    boolean createTicketForUser(TicketData ticketData);
}
