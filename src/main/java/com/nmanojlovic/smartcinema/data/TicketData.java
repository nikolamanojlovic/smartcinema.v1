package com.nmanojlovic.smartcinema.data;

import com.nmanojlovic.smartcinema.models.TicketEntry;

import java.util.List;

public class TicketData {

    private double price;
    private List<TicketEntryData> entries;
    private UserData user;

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

    public UserData getUser() {
        return user;
    }

    public void setUser(UserData user) {
        this.user = user;
    }
}
