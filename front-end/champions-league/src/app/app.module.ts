import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadiosComponent } from './estadios/estadios.component';
import { FinaisComponent } from './finais/finais.component';
import { TimesComponent } from './times/times.component';

@NgModule({
  declarations: [AppComponent, EstadiosComponent, FinaisComponent, TimesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
