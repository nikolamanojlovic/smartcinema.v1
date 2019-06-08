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
                    "Belgrade", "Serbia", false),
            new User("jovic.jovana@gmail.com", "jovana", "Jovana",
                    "Jović", Constants.FEMALE, DateUtils.getDateFromString("03/07/1985"),
                    "Belgrade", "Serbia", true)
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
                    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKzNoxsksG5Q/v1/1200x-1.jpg", 1200),
            new Film("tt6565702", "Dark Phoenix", 2019, 113,
                    "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix.",
                    "https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SX300.jpg",
                    "https://www.star2.com/wp-content/uploads/2019/06/Dark-Phoenix-1170x480.jpg", 1800),
            new Film("tt5113040", "The Secret Life of Pets 2", 2019, 86,
                    "Continuing the story of Max and his pet friends, following their secret lives after their owners leave them for work or school each day.",
                    "https://m.media-amazon.com/images/M/MV5BMTA2NzM0MjA0MTJeQTJeQWpwZ15BbWU4MDk1MzYwNzYz._V1_SX300.jpg",
                    "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/the-secret-life-of-pets-2-1-700x376.jpg", 450),
            new Film("tt0197521", "Godzilla: King of the Monsters", 2019, 80,
                    "A 400-foot (122-meter) dinosaur-like beast, awoken from undersea hibernation off the Japanese coast by atomic-bomb testing, attacks Tokyo.",
                    "http://www.bioskopsombor.net/wp-content/uploads/2019/03/MV5BMjkwNjMwMjEwNF5BMl5BanBnXkFtZTgwMzg5NjI5NjM@._V1_.jpg",
                    "http://cdn.collider.com/wp-content/uploads/2019/03/godzilla-king-of-the-monsters-vs-ghidorah.jpg", 800),
            new Film("tt6146586", "John Wick: Chapter 3 - Parabellum", 2019, 130,
                    "Super-assassin John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head.",
                    "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
                    "https://cdn.mos.cms.futurecdn.net/37TvALgYi2PdvjZEto7hsN.jpg", 1000),
            new Film("tt5884052", "Pokémon Detective Pikachu", 2019, 104,
                    "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
                    "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg",
                    "https://cf-images.us-east-1.prod.boltdns.net/v1/static/769341148/ea18861d-e838-402d-b9a5-e898eb08a8d2/3df0c7d2-2d0e-45b9-83e0-3676e76f84d8/1280x720/match/image.jpg", 800),
            new Film("tt6320628", "Spider-Man: Far From Home", 2019, 133,
                    "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
                    "https://m.media-amazon.com/images/M/MV5BZDI4Mjc0Y2UtMTE0My00NmUwLTkxYWYtZjVjZjUyOTk2ZjViXkEyXkFqcGdeQXVyNzYwNTMyMTA@._V1_SX300.jpg",
                    "https://timedotcom.files.wordpress.com/2019/01/spider-man-far-from-home-trailer-9.png", 1200),
            new Film("tt1918886", "Joker", 2019, 104,
                    "A space scientist working on a project to communicate with aliens visits a village called Paglapur.",
                    "https://m.media-amazon.com/images/M/MV5BMTcyNjU1MjQ3MF5BMl5BanBnXkFtZTgwNTk1MDA4NzM@._V1_.jpg",
                    "https://www.dailydot.com/wp-content/uploads/2018/08/joker-movie-trailer-e1554297620247.jpg", 1800)
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

    private static List<Seat> seatsInLaurenBacall = Arrays.asList(
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

    private static List<Seat> seatsInHumphreyBogart = Arrays.asList(
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
            new Seat(new SeatId(2, 8)),
            new Seat(new SeatId(3, 1)),
            new Seat(new SeatId(3, 2)),
            new Seat(new SeatId(3, 3)),
            new Seat(new SeatId(3, 4)),
            new Seat(new SeatId(3, 5)),
            new Seat(new SeatId(3, 6)),
            new Seat(new SeatId(3, 7)),
            new Seat(new SeatId(3, 8))
    );


    private static List<Hall> halls = Arrays.asList(
            new Hall(1478, "Marilyn Monroe", seatsInHallMarlyn),
            new Hall(1469, "Rita Hayworth", seatsInHallRita),
            new Hall(1400, "Lauren Bacall", seatsInLaurenBacall),
            new Hall(1433, "Humphrey Bogartl", seatsInHumphreyBogart)
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
                            LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration() + films.get(2).getDuration()))),
            new Projection(halls.get(3), films.get(0),
                    new ProjectionId(new Date(), LocalTime.now(),
                            LocalTime.now().plusMinutes(films.get(0).getDuration()))),
            new Projection(halls.get(3), films.get(1),
                    new ProjectionId(new Date(), LocalTime.now().plusMinutes(films.get(0).getDuration()),
                            LocalTime.now().plusMinutes(films.get(0).getDuration() + films.get(1).getDuration()))),
            new Projection(halls.get(3), films.get(2),
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
            new Ticket(10000, ticketEntries1000.size() * 600, new Date(), ticketEntries1000, users.get(0))
    );
}
