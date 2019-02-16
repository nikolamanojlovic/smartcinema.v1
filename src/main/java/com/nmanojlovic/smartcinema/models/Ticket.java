package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "ticket")
public class Ticket implements Serializable {

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "price")
    private double price;

    @Column(name = "timestamp")
    private Date timestamp;

    @OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<TicketEntry> entries;

    @ManyToOne
    @JoinColumn(name = "buff")
    private FilmBuff buff;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public double getPrice() { return price; }

    public void setPrice(double price) { this.price = price; }

    public Date getTimestamp() { return timestamp; }

    public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }

    public List<TicketEntry> getEntries() { return entries; }

    public void setEntries(List<TicketEntry> entries) { this.entries = entries; }

    public FilmBuff getBuff() { return buff; }

    public void setBuff(FilmBuff buff) { this.buff = buff; }
}