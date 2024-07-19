package com.example.CRUD.rest;

import com.example.CRUD.com.example.CRUD.model.Person;
import com.example.CRUD.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/persons")
public class PersonREST {

    @Autowired
    private PersonService personService;

    @GetMapping
    private ResponseEntity<List<Person>> getAllPersons(){
        return ResponseEntity.ok(personService.findAll());
    }

    @PostMapping
    private ResponseEntity<Person> savePerson(@RequestBody Person person){

        try{
        Person personSaved= personService.save(person);

        return ResponseEntity.created(new URI("/persons/"+personSaved.getId())).body(personSaved);

        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping (value = "/delete/{id}")
    private  ResponseEntity<Boolean> deletePersona (@PathVariable ("id") Long id){
        personService.deleteById(id);
        return ResponseEntity.ok(!(personService.findById(id) != null));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Person>> searchPersons(@RequestParam String keyword) {
        return ResponseEntity.ok(personService.searchPersons(keyword));
    }

}
