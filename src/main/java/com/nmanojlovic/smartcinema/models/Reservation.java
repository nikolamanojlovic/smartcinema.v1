package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.io.Serializable;

@EnableAutoConfiguration
@Entity
@Table(name = "reservation")
public class Reservation implements Serializable {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "hall", referencedColumnName = "hall"),
            @JoinColumn(name = "row", referencedColumnName = "row"),
            @JoinColumn(name = "number", referencedColumnName = "number")
    })
    @Id
    private Seat seat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "hall", referencedColumnName = "hall"),
            @JoinColumn(name = "film", referencedColumnName = "film"),
            @JoinColumn(name = "date", referencedColumnName = "date"),
            @JoinColumn(name = "start_time", referencedColumnName = "start_time"),
            @JoinColumn(name = "end_time", referencedColumnName = "end_time")
    })
    @Id
    private Projection projection;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "ticket", referencedColumnName = "ticket"),
            @JoinColumn(name = "entry", referencedColumnName = "ordinal")
    })
    private TicketEntry ticketEntry;

    public Seat getSeat() { return seat; }

    public void setSeat(Seat seat) { this.seat = seat; }

    public Projection getProjection() { return projection; }

    public void setProjection(Projection projection) { this.projection = projection; }

    public TicketEntry getTicketEntry() { return ticketEntry; }

    public void setTicketEntry(TicketEntry ticketEntry) { this.ticketEntry = ticketEntry; }
}
