package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "buff_group")
public class BuffGroup {

    public BuffGroup(long id, String name, List<FilmBuff> buffs) {
        this.id = id;
        this.name = name;
        this.buffs = buffs;
    }

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "buff_group_relation", joinColumns = {@JoinColumn(name = "group_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "buff_id", referencedColumnName = "email")})
    private List<FilmBuff> buffs;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public List<FilmBuff> getBuffs() { return buffs; }

    public void setBuffs(List<FilmBuff> buffs) { this.buffs = buffs; }
}
