package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "film_buff")
public class FilmBuff extends AbstractUser {

    public FilmBuff(String email, String password, String name, String lastName, char sex, boolean enabled,
                    boolean tokenExpired, List<Role> roles, Date dateOfBirth, String profession, String city,
                    String state, String imageUri, List<BuffGroup> groups, List<Ticket> tickets) {
        super(email, password, name, lastName, sex, enabled, tokenExpired, roles);
        this.dateOfBirth = dateOfBirth;
        this.profession = profession;
        this.city = city;
        this.state = state;
        this.imageUri = imageUri;
        this.groups = groups;
        this.tickets = tickets;
    }

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "profession")
    private String profession;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "image_uri")
    private String imageUri;

    @ManyToMany(mappedBy = "buffs")
    private List<BuffGroup> groups;

    @OneToMany(mappedBy = "buff", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Ticket> tickets;

    public Date getDateOfBirth() { return dateOfBirth; }

    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getProfession() { return profession; }

    public void setProfession(String profession) { this.profession = profession; }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }

    public void setState(String state) { this.state = state; }

    public String getImageUri() { return imageUri; }

    public void setImageUri(String imageUri) { this.imageUri = imageUri; }

    public List<BuffGroup> getGroups() { return groups; }

    public void setGroups(List<BuffGroup> groups) { this.groups = groups; }

    public List<Ticket> getTickets() { return tickets; }

    public void setTickets(List<Ticket> tickets) { this.tickets = tickets; }
}
