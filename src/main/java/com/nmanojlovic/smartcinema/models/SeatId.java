package com.nmanojlovic.smartcinema.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class SeatId {

    public SeatId() {}

    public SeatId(int row, int number) {
        this.row = row;
        this.number = number;
    }

    @Column(name = "row")
    private int row;

    @Column(name = "number")
    private int number;

    public int getRow() { return row; }

    public void setRow(int row) { this.row = row; }

    public int getNumber() { return number; }

    public void setNumber(int number) { this.number = number; }
}
