package com.example.CRUD.com.example.CRUD.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "person")

public class Person implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String lastname;
    private String age;
    private String birthdate;
    @Column(nullable = false, unique = true)
    private String dni;

    @ManyToOne
    @JoinColumn(name = "countryId")
    private Country country;
    @ManyToOne
    @JoinColumn(name = "stateId")
    private State state;




}
