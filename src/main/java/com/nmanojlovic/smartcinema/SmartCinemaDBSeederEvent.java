package com.nmanojlovic.smartcinema;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.*;
import com.nmanojlovic.smartcinema.models.*;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Component
public class SmartCinemaDBSeederEvent {

    @Resource(name = "userDao")
    private IUserDao userDao;

    @Resource(name = "filmDao")
    private IFilmDao filmDao;

    @Resource(name = "hallDao")
    private IHallDao hallDao;

    @Resource(name = "projectionDao")
    private IProjectionDao projectionDao;

    @Resource(name = "ticketDao")
    private ITicketDao ticketDao;

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        seedUserTable();
        seedFilmTable();
        seedHallTable();
        seedTicketTable();
        seedProjectionTable();
        seedReservationTable();
    }

    private void seedUserTable() {
        users.forEach(user -> userDao.create(user));
    }

    private void seedFilmTable() {
        films.forEach(film -> filmDao.create(film));
    }

    private void seedHallTable() {
        halls.forEach(hall -> {
            hall.getSeats().forEach(seat -> {
                seat.setHall(hall);
            });
            hallDao.create(hall);
        });
    }

    private void seedTicketTable() {
        tickets.forEach(ticket -> {
            ticket.getEntries().forEach(entry -> entry.setTicket(ticket));
            ticketDao.create(ticket);
        });
    }

    private void seedProjectionTable() {
        projections.forEach(projection -> {
            projectionDao.create(projection);
        });
    }

    private void seedReservationTable() {
        for (int i = 0; i < ticketEntries1000.size(); i++) {
            ticketDao.createReservationForTicketEntry(reservations.get(i), ticketEntries1000.get(i));
        }
    }

    /* DATA */
    private static List<User> users =  Arrays.asList(
            new User("manojlovic.nikola@gmail.com", "nikola", "Nikola",
                    "Manojlović", Constants.MALE, DateUtils.getDateFromString("03/07/1995"),
                    "Belgrade", "Serbia")
    );

    private static List<Film> films = Arrays.asList(
            new Film("tt0083658", "Blade Runner 2049", 2017, 117,
                    "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
                    "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
                    "https://static1.squarespace.com/static/59e512ddf43b55c29c71b996/t/59ef760632601e21e288b44f/1508865585064/bladerunner2049.png", 600),
            new Film("tt1790864", "The Maze Runner", 2014, 113,
                    "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
                    "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
                    "https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/_800x1000_fit_center-center/mazerunner2.jpg", 600),
            new Film("tt4154796", "Avengers: Endgame", 2019, 130,
                    "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                    "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
                    "https://s2.best-wallpaper.net/wallpaper/3840x2160/1812/Avengers-Endgame-DC-Comics-movie-2019_3840x2160.jpg", 750),
            new Film("tt4154664", "Captain Marvel", 2019, 124,
                    "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
                    "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
                    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKzNoxsksG5Q/v1/1200x-1.jpg", 1200)
    );

    private static List<Seat> seatsInHallMarlyn = Arrays.asList(
            new Seat(new SeatId(1, 1)),
            new Seat(new SeatId(1, 2)),
            new Seat(new SeatId(1, 3)),
            new Seat(new SeatId(1, 4)),
            new Seat(new SeatId(1, 5)),
            new Seat(new SeatId(1, 6)),
            new Seat(new SeatId(1, 7)),
            new Seat(new SeatId(1, 8)),
            new Seat(new SeatId(2, 1)),
            new Seat(new SeatId(2, 2)),
            new Seat(new SeatId(2, 3)),
            new Seat(new SeatId(2, 4)),
            new Seat(new SeatId(2, 5)),
            new Seat(new SeatId(2, 6)),
            new Seat(new SeatId(2, 7)),
            new Seat(new SeatId(2, 8))
    );

    private static List<Seat> seatsInHallRita = Arrays.asList(
            new Seat(new SeatId(1, 1)),
            new Seat(new SeatId(1, 2)),
            new Seat(new SeatId(1, 3)),
            new Seat(new SeatId(1, 4)),
            new Seat(new SeatId(1, 5)),
            new Seat(new SeatId(1, 6)),
            new Seat(new SeatId(1, 7)),
            new Seat(new SeatId(1, 8)),
            new Seat(new SeatId(2, 1)),
            new Seat(new SeatId(2, 2)),
            new Seat(new SeatId(2, 3)),
            new Seat(new SeatId(2, 4)),
            new Seat(new SeatId(2, 5)),
            new Seat(new SeatId(2, 6)),
            new Seat(new SeatId(2, 7)),
            new Seat(new SeatId(2, 8))
    );

    private static List<Hall> halls = Arrays.asList(
            new Hall(1478, "Marilyn Monroe", seatsInHallMarlyn),
            new Hall(1469, "Rita Hayworth", seatsInHallRita)
    );

    private static List<Projection> projections = Arrays.asList(
            new Projection(halls.get(0), films.get(0),
                    new ProjectionId(new Date(), LocalTime.now(),
                            LocalTime.now().plusMinutes(films.get(0).getDuration()))),
            new Projection(halls.get(0), films.get(1),
                    new ProjectionId(new Date(), LocalTime.now().plusMinutes(films.get(0).getDuration()),
                            LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration()))),
            new Projection(halls.get(0), films.get(2),
                    new ProjectionId(new Date(), LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration()),
                            LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration() + films.get(2).getDuration()))),
            new Projection(halls.get(1), films.get(0),
                    new ProjectionId(new Date(), LocalTime.now(),
                            LocalTime.now().plusMinutes(films.get(0).getDuration()))),
            new Projection(halls.get(1), films.get(1),
                    new ProjectionId(new Date(), LocalTime.now().plusMinutes(films.get(0).getDuration()),
                            LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration()))),
            new Projection(halls.get(1), films.get(2),
                    new ProjectionId(new Date(), LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration()),
                            LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration() + films.get(2).getDuration())))
    );

    private static List<Reservation> reservations = Arrays.asList(
            new Reservation(seatsInHallMarlyn.get(0), projections.get(0)),
            new Reservation(seatsInHallMarlyn.get(1), projections.get(0)),
            new Reservation(seatsInHallMarlyn.get(2), projections.get(0))
    );

    private static List<TicketEntry> ticketEntries1000 = Arrays.asList(
            new TicketEntry(1, null),
            new TicketEntry(2, null),
            new TicketEntry(3, null)
    );

    private static List<Ticket> tickets = Arrays.asList(
            new Ticket(10000, 600, new Date(), ticketEntries1000, users.get(0))
    );
}
