import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { StatesService } from './services/states/states.service';
import { CountriesService } from './services/countries/countries.service';
import { PersonsService } from './services/persons/persons.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Country, Person, State } from './interfaces';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    PersonFormComponent,
    PersonListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  showForm = false;

  personForm: FormGroup;
  countries: Country[] = [];
  states: State[] = [];
  persons: Person[] = [];
  filteredPersons: Person[] = [];

  constructor(
    private fb: FormBuilder,
    private statesService: StatesService,
    private countriesService: CountriesService,
    private personsService: PersonsService
  ) {
    this.personForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      birthdate: ['', Validators.required],
      dni: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(
      (resp) => {
        this.countries = resp;
      },
      (error) => {
        console.error(error);
      }
    );

    this.personsService.getAllPersons().subscribe(
      (resp) => {
        this.persons = resp;
      },
      (error) => {
        console.error(error);
      }
    );

    this.personForm.get('country')?.valueChanges.subscribe((value) => {
      if (value) {
        this.statesByCountry(value.id);
      }
    });
  }

  statesByCountry(countryId: number): void {
    this.statesService.getAllStatesByCountry(countryId).subscribe(
      (resp) => {
        this.states = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  save(): void {
    this.personsService.savePerson(this.personForm.value).subscribe(
      (resp) => {
        this.persons = this.persons.filter((p: any) => p.id !== resp.id);
        this.persons.push(resp);
        this.closeFormAndReset();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(person: Person): void {
    this.personsService.deletePerson(person.id).subscribe(
      (resp) => {
        if (resp) {
          this.persons = this.persons.filter((p: Person) => p.id !== person.id);
        }
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  edit(person: Person): void {
    this.personForm.setValue({
      id: person.id,
      name: person.name,
      lastname: person.lastname,
      age: person.age,
      birthdate: person.birthdate,
      dni: person.dni,
      country: person.country,
      state: person.state,
    });
    this.showForm = true;
  }

  closeFormAndReset(): void {
    this.showForm = false;
    this.personForm.reset();
  }

  cancelForm(): void {
    this.closeFormAndReset();
  }

  onSearch(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;

    this.personsService.searchPersons(keyword).subscribe(
      (resp) => {
        this.filteredPersons = resp;
        console.log(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
