package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.models.*;

public interface ITicketDao  extends ISuperDao<Ticket, Long>  {

    long getTicketId();

    Ticket depopulateTicketData(TicketData data);

    void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry);
}
