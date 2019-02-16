package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "projection")
public class Projection implements Serializable {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="hall", referencedColumnName = "id")
    @Id
    private Hall hall;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="film", referencedColumnName = "id")
    @Id
    private Film film;

    @EmbeddedId
    private ProjectionId id;

    @OneToMany(mappedBy = "projection", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Reservation> reservations;

    public Hall getHall() { return hall; }

    public void setHall(Hall hall) { this.hall = hall; }

    public Film getFilm() { return film; }

    public void setFilm(Film film) { this.film = film; }

    public ProjectionId getId() { return id; }

    public void setId(ProjectionId id) { this.id = id; }

    public List<Reservation> getReservations() { return reservations; }

    public void setReservations(List<Reservation> reservations) { this.reservations = reservations; }
}
