package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.daos.IProjectionDao;
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

    @Resource(name = "projectionDao")
    private IProjectionDao projectionDao;

    @Override
    protected String getModelName() {
        return " " + Ticket.class.getSimpleName() + " ";
    }

    @Override
    public long getTicketId() {
        Long result = getEntityManager().createQuery(Constants.MAX.replace(":field", "ticket.id")
                .replace(":table", getModelName())
                .replace(":alias", "ticket"), Long.class).getSingleResult();
        return result == null ? 0 : ++result;
    }

    @Override
    public List<Ticket> getTicketsForCurrentUser(String user) {
        return getEntityManager().createQuery(Constants.FROM_WHERE.replace(":table", getModelName())
                .replace(":field", "user.email").replace(":value", user), Ticket.class)
                .getResultList();
    }

    @Override
    @Transactional
    public void createReservationForTicketEntry(Reservation reservation, TicketEntry ticketEntry) {
        reservation.setTicketEntry(ticketEntry);
        getEntityManager().persist(reservation);
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

    private TicketEntry depopulateTicketEntryData(TicketEntryData entryData, Ticket ticket) {
        TicketEntry entry = new TicketEntry();
        entry.setOn(entryData.getOn());

        Hall hall = hallDao.findById(entryData.getReservation().getProjection().getHallData().getId());
        ReservationData resData = entryData.getReservation();
        ProjectionData projData = resData.getProjection();

        entry.setReservation(new Reservation(
                hallDao.findSeatInHallById(Long.toString(hall.getId()),
                        resData.getSeat().getRow(), resData.getSeat().getNumber()),
                projectionDao.findProjectionById(
                        new ProjectionId(projData.getDate(), projData.getStartTime(), projData.getEndTime()),
                        projData.getFilmId(),
                        Long.toString(projData.getHallData().getId())
                )
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
