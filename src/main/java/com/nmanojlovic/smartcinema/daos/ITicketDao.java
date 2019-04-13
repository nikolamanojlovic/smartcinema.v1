package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.models.*;

public interface ITicketDao  extends ISuperDao<Ticket, Long>  {

    void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry);
}
