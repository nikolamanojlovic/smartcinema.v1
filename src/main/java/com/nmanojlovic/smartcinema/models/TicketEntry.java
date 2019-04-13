package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.io.Serializable;

@EnableAutoConfiguration
@Entity
@Table(name = "ticket_entry")
public class TicketEntry implements Serializable {

    public TicketEntry() {}

    public TicketEntry(long on, Reservation reservation) {
        this.on = on;
        this.reservation = reservation;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ordinal")
    private long on;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="ticket", referencedColumnName = "id")
    private Ticket ticket;

    @OneToOne(mappedBy="ticketEntry", fetch=FetchType.LAZY, cascade = CascadeType.ALL)
    private Reservation reservation;

    public long getOn() { return on; }

    public void setOn(long on) { this.on = on; }

    public Ticket getTicket() { return ticket; }

    public void setTicket(Ticket ticket) { this.ticket = ticket; }

    public Reservation getReservation() { return reservation; }

    public void setReservation(Reservation reservation) { this.reservation = reservation; }
}