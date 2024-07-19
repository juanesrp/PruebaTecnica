package com.example.CRUD.service;

import com.example.CRUD.com.example.CRUD.model.Person;
import com.example.CRUD.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;


    public List<Person> findAll() {
        return personRepository.findAll();
    }

    public List<Person> findAll(Sort sort) {
        return personRepository.findAll(sort);
    }


    public Page<Person> findAll(Pageable pageable) {
        return personRepository.findAll(pageable);
    }

    public <S extends Person> S save(S entity) {
        return personRepository.save(entity);
    }

    public Optional<Person> findById(Long id) {
        return personRepository.findById(id);
    }


    public Boolean deleteById(Long id) {
        if (personRepository.existsById(id)) {
            personRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public void delete(Person entity) {
        personRepository.delete(entity);
    }

    public List<Person> searchPersons(String query) {
        return personRepository.findByNameContainingOrLastnameContainingOrDniContaining(query, query, query);
    }
}
