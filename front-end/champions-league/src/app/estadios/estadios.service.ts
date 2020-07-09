import { Injectable } from '@angular/core';

import { Estadio } from './estadio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadiosService {
  urlApi: string = 'http://localhost:8081/api';
  estadios: string[];

  constructor(private http: HttpClient) {}

  public get(): Observable<Estadio[]> {
    return this.http.get<Estadio[]>(`${this.urlApi}/stadiums/`);
  }

  public getById(id): Observable<Estadio> {
    return this.http.get<Estadio>(`${this.urlApi}/stadiums/id/${id}`);
  }

  public getByName(name): Observable<Estadio[]> {
    return this.http.get<Estadio[]>(`${this.urlApi}/stadiums/name/${name}`);
  }

  public getByCountry(country): Observable<Estadio[]> {
    return this.http.get<Estadio[]>(
      `${this.urlApi}/stadiums/country/${country}`
    );
  }
}
