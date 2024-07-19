import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private API_SERVER = 'http://localhost:8080/persons';

  constructor(private httpClient: HttpClient) {}

  public getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.API_SERVER);
  }

  public savePerson(person: Partial<Person>): Observable<Person> {
    const { id, ...personWithoutId } = person;
    return this.httpClient.post<Person>(this.API_SERVER, personWithoutId);
  }

  public deletePerson(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.API_SERVER}/delete/${id}`);
  }

  searchPersons(keyword: string): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.API_SERVER}/search`, {
      params: { keyword },
    });
  }
}
