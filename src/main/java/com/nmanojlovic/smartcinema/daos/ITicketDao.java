package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.models.Reservation;
import com.nmanojlovic.smartcinema.models.Ticket;
import com.nmanojlovic.smartcinema.models.TicketEntry;

import java.util.List;

public interface ITicketDao  extends ISuperDao<Ticket, Long>  {

    long getTicketId();

    List<Ticket> getTicketsForCurrentUser(String user);

    void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry);

    Ticket depopulateTicketData(TicketData data);
}
