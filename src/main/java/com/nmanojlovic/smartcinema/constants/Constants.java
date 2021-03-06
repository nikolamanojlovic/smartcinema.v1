package com.nmanojlovic.smartcinema.constants;

public final class Constants {

    public static final char MALE = 'M';
    public static final char FEMALE = 'F';

    public static final String DEFAULT_DATE_FORMAT = "dd/MM/yyyy";
    public static final String MYSQL_DATE_FORMAT = "yyyy-MM-dd";

    public static final String FROM = " FROM ";
    public static final String FROM_ORDER_SIZE = " FROM :table ORDER BY SIZE(:field) :type";
    public static final String FROM_WHERE = " FROM :table WHERE :field = ':value'";
    public static final String FROM_WHERE_COMPLEX = " FROM :table WHERE :condition";
    public static final String FROM_AS_WHERE_COMPLEX = " FROM :table AS :alias WHERE :condition";
    public static final String SELECT_ALL_FROM_AS_WHERE_COMPLEX = "SELECT * FROM :table AS :alias WHERE :condition";
    public static final String MAX = " SELECT MAX(:field) FROM :table AS :alias";
    public static final String MAX_WHERE = " SELECT MAX(:field) FROM :table AS :alias WHERE :condition";

    public static final String ROW = "row";
    public static final String NUMBER = "number";

    public static final String ASC = "ASC";
    public static final String DESC = "DESC";

    public static final int PAGE_SIZE = 10;
}