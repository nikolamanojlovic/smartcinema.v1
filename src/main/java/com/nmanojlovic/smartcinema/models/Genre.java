package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "genre")
public class Genre {

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "about")
    private String about;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "movies_genre_relation", joinColumns = {@JoinColumn(name = "genre_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "film_id", referencedColumnName = "id")})
    private List<Film> films;

    public long getId() { return id; }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public List<Film> getFilms() { return films; }

    public void setFilms(List<Film> films) { this.films = films; }
}
