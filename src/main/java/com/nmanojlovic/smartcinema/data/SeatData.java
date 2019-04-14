package com.nmanojlovic.smartcinema.data;

import javax.persistence.Column;

public class SeatData {

    private int row;
    private int number;

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
