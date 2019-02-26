package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "staff")
public class Staff extends AbstractUser {

    public Staff(String email, String password, String name, String lastName, char sex, boolean enabled,
                 boolean tokenExpired, List<Role> roles, String type) {
        super(email, password, name, lastName, sex, enabled, tokenExpired, roles);
        this.type = type;
    }

    @Column(name = "type")
    private String type;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
