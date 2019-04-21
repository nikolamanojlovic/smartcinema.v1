package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.models.Reservation;
import com.nmanojlovic.smartcinema.models.Ticket;
import com.nmanojlovic.smartcinema.models.TicketEntry;

public interface ITicketDao  extends ISuperDao<Ticket, Long>  {

    long getTicketId();

    Ticket depopulateTicketData(TicketData data);

    void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry);
}
