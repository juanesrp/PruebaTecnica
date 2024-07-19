package com.example.CRUD.rest;

import com.example.CRUD.com.example.CRUD.model.State;
import com.example.CRUD.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/state")
public class StateREST {

    @Autowired
    private StateService stateService;

    @GetMapping("/{countryId}")
    public List<State> getStatesByCountryId(@PathVariable Long countryId) {
        return stateService.findByCountryId(countryId);
    }

}
