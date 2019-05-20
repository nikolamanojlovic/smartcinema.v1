package com.nmanojlovic.smartcinema.data;

import java.util.Date;
import java.util.List;

public class TicketData {

    private long id;
    private double price;
    private List<TicketEntryData> entries;
    private Date timestamp;
    private UserData user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<TicketEntryData> getEntries() {
        return entries;
    }

    public void setEntries(List<TicketEntryData> entries) {
        this.entries = entries;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public UserData getUser() {
        return user;
    }

    public void setUser(UserData user) {
        this.user = user;
    }
}
