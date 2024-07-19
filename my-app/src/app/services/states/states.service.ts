import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private API_SERVER = 'http://localhost:8080/state';

  constructor(private httpClient: HttpClient) {}

  public getAllStatesByCountry(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_SERVER}/${id}`);
  }
}
