package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.daos.ITicketDao;
import com.nmanojlovic.smartcinema.models.*;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository("ticketDao")
public class TicketDao extends SuperDao<Ticket, Long> implements ITicketDao {

    public TicketDao() {
        this.model = Ticket.class;
    }

    @Override
    protected String getModelName() {
        return " " + Ticket.class.getSimpleName() + " ";
    }

    @Override
    @Transactional
    public void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry) {
        reservation.setTicketEntry(ticketEntry);
        getEntityManager().persist(reservation);
    }
}
