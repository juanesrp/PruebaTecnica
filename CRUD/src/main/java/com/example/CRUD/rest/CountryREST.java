package com.example.CRUD.rest;

import com.example.CRUD.com.example.CRUD.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.CRUD.service.CountryService;

import java.util.List;

@RestController
@RequestMapping("/country")
public class CountryREST {

    @Autowired
    private CountryService countryService;

    @GetMapping
    private ResponseEntity<List<Country>> getAllCountries(){
        return ResponseEntity.ok(countryService.findAll());
    }
}
