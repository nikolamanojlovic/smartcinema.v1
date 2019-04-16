package com.nmanojlovic.smartcinema.data;

import com.nmanojlovic.smartcinema.models.Reservation;

public class TicketEntryData {

    private long on;
    private ReservationData reservation;

    public long getOn() {
        return on;
    }

    public void setOn(long on) {
        this.on = on;
    }

    public ReservationData getReservation() {
        return reservation;
    }

    public void setReservation(ReservationData reservation) {
        this.reservation = reservation;
    }
}
