import { EstadiosService } from './estadios.service';
import { Component, OnInit } from '@angular/core';

import { Estadio } from './estadio';

@Component({
  selector: 'app-estadios',
  templateUrl: './estadios.component.html',
  styleUrls: ['./estadios.component.css'],
})
export class EstadiosComponent implements OnInit {
  estadios: Estadio[];
  constructor(private service: EstadiosService) {}

  ngOnInit(): void {
    this.get();
  }

  private get(): void {
    this.service.get().subscribe(
      (res) => {
        this.estadios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  buscar(opcaoBusca: string, input: string) {
    if (opcaoBusca == 'id') {
      this.getById(input);
    } else if (opcaoBusca == 'nome') {
      this.getByName(input);
    } else if (opcaoBusca == 'pais') {
      this.getByCountry(input);
    }
  }

  private getById(id: string): void {
    this.service.getById(id).subscribe(
      (res) => {
        this.estadios = [res];
        console.log(this.estadios);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getByName(nome: string): void {
    this.service.getByName(nome).subscribe(
      (res) => {
        this.estadios = res;
        console.log(this.estadios);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getByCountry(pais: string): void {
    this.service.getByCountry(pais).subscribe(
      (res) => {
        this.estadios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
