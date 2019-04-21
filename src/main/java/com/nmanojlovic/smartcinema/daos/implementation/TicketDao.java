package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.daos.ITicketDao;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.data.ReservationData;
import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.data.TicketEntryData;
import com.nmanojlovic.smartcinema.models.*;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Repository("ticketDao")
public class TicketDao extends SuperDao<Ticket, Long> implements ITicketDao {

    public TicketDao() {
        this.model = Ticket.class;
    }

    @Resource(name = "userDao")
    private IUserDao userDao;

    @Resource(name = "hallDao")
    private IHallDao hallDao;

    @Override
    protected String getModelName() {
        return " " + Ticket.class.getSimpleName() + " ";
    }

    @Override
    public long getTicketId() {
        Object result = getEntityManager().createQuery(Constants.MAX.replace(":field", "ticket.id")
                .replace(":table", getModelName())
                .replace(":alias", "ticket")).getSingleResult();
        return result == null ? 0 : (((long) result) + 1);
    }


    @Override
    public Ticket depopulateTicketData(TicketData data) {
        Ticket ticket = new Ticket();
        ticket.setId(getTicketId());
        ticket.setTimestamp(new Date());
        ticket.setUser(userDao.findById(data.getUser().getEmail()));
        ticket.setEntries(data.getEntries().stream().map(entryData -> depopulateTicketEntryData(entryData, ticket)).collect(Collectors.toList()));
        ticket.setPrice(calculateTicketPrice(ticket.getEntries()));

        return ticket;
    }

    @Override
    @Transactional
    public void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry) {
        reservation.setTicketEntry(ticketEntry);
        getEntityManager().persist(reservation);
    }

    private TicketEntry depopulateTicketEntryData(TicketEntryData entryData, Ticket ticket) {
        TicketEntry entry = new TicketEntry();
        entry.setOn(entryData.getOn());

        Hall hall = hallDao.findById(entryData.getReservation().getProjection().getHallData().getId());
        ReservationData resData = entryData.getReservation();
        ProjectionData projData = resData.getProjection();

        entry.setReservation(new Reservation(
                hall.getSeats().stream().filter(seat ->
                        seat.getSeatId().equals(new SeatId(resData.getSeat().getRow(), resData.getSeat().getNumber())))
                        .findFirst().get(),
                hall.getProjections().stream().filter(projection ->
                        projection.getFilm().getId().equals(projData.getFilmId())
                                && projection.getId().equals(new ProjectionId(projData.getDate(), projData.getStartTime(), projData.getEndTime())))
                        .findFirst().get()

        ));

        entry.getReservation().setTicketEntry(entry);
        entry.setTicket(ticket);

        return entry;
    }

    private double calculateTicketPrice(List<TicketEntry> ticketEntries) {
        return ticketEntries.stream().mapToDouble(ticketEntry ->
                ticketEntry.getReservation().getProjection().getFilm().getCostOfPlay()).sum();
    }
}
