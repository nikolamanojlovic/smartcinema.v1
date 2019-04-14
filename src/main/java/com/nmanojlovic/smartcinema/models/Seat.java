package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "seat")
public class Seat implements Serializable {

    public Seat() {}

    public Seat(SeatId seatId) {
        this.seatId = seatId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="hall", referencedColumnName = "id")
    @Id
    private Hall hall;

    @EmbeddedId
    private SeatId seatId;

    @OneToMany(mappedBy = "seat", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Reservation> reservations;

    public Hall getHall() { return hall; }

    public void setHall(Hall hall) { this.hall = hall; }

    public SeatId getSeatId() { return seatId; }

    public void setSeatId(SeatId seatId) { this.seatId = seatId; }

    public List<Reservation> getReservations() { return reservations; }

    public void setReservations(List<Reservation> projections) { this.reservations = projections; }
}
