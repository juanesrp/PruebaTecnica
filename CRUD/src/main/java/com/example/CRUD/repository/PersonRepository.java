package com.example.CRUD.repository;

import com.example.CRUD.com.example.CRUD.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findByNameContainingOrLastnameContainingOrDniContaining(
            String name, String lastname, String dni);
}
