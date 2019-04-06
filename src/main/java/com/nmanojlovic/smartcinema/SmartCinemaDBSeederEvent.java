package com.nmanojlovic.smartcinema;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IFilmDao;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.Film;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.List;

@Component
public class SmartCinemaDBSeederEvent {

    @Resource(name = "userDao")
    private IUserDao userDao;

    @Resource(name = "filmDao")
    private IFilmDao filmDao;

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        seedUserTable();
        seedFilmTable();
    }

    private void seedUserTable() {
        users.forEach(user -> userDao.create(user));
    }

    private void seedFilmTable() {
        films.forEach(film -> filmDao.create(film));
    }

    /* DATA */
    private static List<User> users =  Arrays.asList(
            new User("manojlovic.nikola@gmail.com", "nikola", "Nikola",
                    "Manojlović", Constants.MALE, DateUtils.getDateFromString("03/07/1995"),
                    "Belgrade", "Serbia", null)
    );

    private static List<Film> films = Arrays.asList(
            new Film("tt0083658", "Blade Runner 2049", 2017, 117,
                    "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
                    "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",600, null),
            new Film("tt1790864", "The Maze Runner", 2014, 113,
                    "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
                    "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",600, null),
            new Film("tt4154796", "Avengers: Endgame", 2019, 130,
                    "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                    "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",750, null),
            new Film("tt4154664", "Captain Marvel", 2019, 124,
                    "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
                    "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",1200, null)
    );
}
