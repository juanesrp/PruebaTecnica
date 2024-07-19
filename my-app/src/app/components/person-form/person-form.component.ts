import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country, Person, State } from '../../interfaces';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StatesService } from '../../services/states/states.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
})
export class PersonFormComponent {
  @Input() showForm: boolean = false;
  @Input() personForm: FormGroup = new FormGroup({});
  @Input() countries: Country[] = [];
  @Input() states: State[] = [];
  @Output() savePerson = new EventEmitter<void>();
  @Output() cancelForm = new EventEmitter<void>();
  maxDate: string = '';
  constructor(private statesService: StatesService) {}
  ngOnInit(): void {
    this.personForm.get('country')?.valueChanges.subscribe((value) => {
      if (value) {
        this.statesByCountry(value.id);
      }
    });

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    this.maxDate = `${year}-${month}-${day}`;
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

  onSave(): void {
    this.savePerson.emit();
  }

  onCancel(): void {
    this.cancelForm.emit();
  }
}
