import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinaisComponent } from './finais/finais.component';
import { EstadiosComponent } from './estadios/estadios.component';

const routes: Routes = [
  { path: 'estadios', component: EstadiosComponent },
  { path: 'finais', component: FinaisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
