import { FinaisService } from './finais.service';
import { Final } from './final';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-finais',
  templateUrl: './finais.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./finais.component.css'],
})
export class FinaisComponent implements OnInit {
  finais: any;
  cols: any[];
  constructor(private service: FinaisService) {}

  ngOnInit(): void {
    this.get();
    this.cols = [
      { field: 'id_season', header: 'Id da Temporada' },
      { field: 'season_year', header: 'Ano da Temporada' },
      { field: 'stadium_name', header: 'Estádio da Final' },
      { field: 'final_date', header: 'Data da Final' },
      { field: 'final_match', header: 'Partida da Final' },
      { field: 'team_name', header: 'Campeão' },
    ];
  }
  buscar(opcaoBusca: string, input: string) {
    if (opcaoBusca == 'id') {
      this.getById(input);
    } else if (opcaoBusca == 'campeao') {
      this.getByChampionName(input);
    }
  }

  private get(): void {
    this.service.get().subscribe(
      (res) => {
        this.finais = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getById(id: string): void {
    this.service.getById(id).subscribe(
      (res) => {
        this.finais = res;
        console.log(this.finais);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getByChampionName(name: string): void {
    this.service.getByChampionName(name).subscribe(
      (res) => {
        this.finais = res;
        console.log(this.finais);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
