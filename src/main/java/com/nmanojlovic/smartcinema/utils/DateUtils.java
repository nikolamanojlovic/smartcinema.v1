package com.nmanojlovic.smartcinema.utils;

import com.nmanojlovic.smartcinema.constants.Constants;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;

public class DateUtils {

    public static Date asDate(LocalDate localDate) {
        return Date.from(localDate.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
    }

    public static Date getDateFromString(String date) {
        return getDateFromString(date, Constants.DEFAULT_DATE_FORMAT);
    }

    public static String getStringFromDate(Date date) {
        return getStringFromDate(date, Constants.DEFAULT_DATE_FORMAT);
    }

    public static Date getDateFromString(String date, String format) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
            LocalDate localDate = LocalDate.parse(date, formatter);
            return asDate(localDate);
        } catch (IllegalArgumentException | DateTimeParseException iae) {
            return null;
        }
    }

    public static String getStringFromDate(Date date, String format) {
        try {
            DateFormat dateFormat = new SimpleDateFormat(format);
            return dateFormat.format(date);
        } catch (IllegalArgumentException | DateTimeParseException iae) {
            return null;
        }
    }
}
