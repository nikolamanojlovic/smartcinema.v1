package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.data.UserData;

public interface ITicketService {

    boolean createTicketForUser(TicketData ticketData);
}
