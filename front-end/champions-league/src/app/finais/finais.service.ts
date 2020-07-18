import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Final } from './final';

@Injectable({
  providedIn: 'root',
})
export class FinaisService {
  urlApi: string = 'http://localhost:8081/api';
  estadios: string[];

  constructor(private http: HttpClient) {}

  public get(): Observable<Final[]> {
    return this.http.get<Final[]>(`${this.urlApi}/seasonLeagues/search/`);
  }

  public getById(id): Observable<Final[]> {
    return this.http.get<Final[]>(
      `${this.urlApi}/seasonLeagues/search/id/${id}`
    );
  }

  public getByChampionName(name: string): Observable<Final[]> {
    return this.http.get<Final[]>(
      `${this.urlApi}/seasonLeagues/search/champion/${name}`
    );
  }
}
