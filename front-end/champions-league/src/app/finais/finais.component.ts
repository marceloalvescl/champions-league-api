import { FinaisService } from './finais.service';
import { Final } from './final';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finais',
  templateUrl: './finais.component.html',
  styleUrls: ['./finais.component.css'],
})
export class FinaisComponent implements OnInit {
  finais: Final[];
  constructor(private service: FinaisService) {}

  ngOnInit(): void {
    this.get();
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
}
