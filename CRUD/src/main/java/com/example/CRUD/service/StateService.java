package com.example.CRUD.service;

import com.example.CRUD.com.example.CRUD.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.CRUD.repository.StateRepository;
import java.util.List;


@Service
public class StateService  {

    @Autowired
    private StateRepository stateRepository;

    public List<State> findAll() {
        return stateRepository.findAll();
    }

    public List<State> findAll(Sort sort) {
        return stateRepository.findAll(sort);
    }

    public List<State> findByCountryId(Long countryId) {
        return stateRepository.findByCountryId(countryId);
    }
}
