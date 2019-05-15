package com.nmanojlovic.smartcinema;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(
        exclude = {
                SecurityAutoConfiguration.class,
        }
)
public class SmartCinemaApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartCinemaApplication.class, args);
    }
}

