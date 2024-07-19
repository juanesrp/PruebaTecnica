import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent {
  @Input() persons: Person[] = [];
  @Output() editPerson = new EventEmitter<Person>();
  @Output() deletePerson = new EventEmitter<Person>();

  onEdit(person: Person): void {
    this.editPerson.emit(person);
  }

  onDelete(person: Person): void {
    this.deletePerson.emit(person);
  }
}
