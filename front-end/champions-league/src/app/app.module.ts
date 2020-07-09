import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadiosComponent } from './estadios/estadios.component';
import { FinaisComponent } from './finais/finais.component';

@NgModule({
  declarations: [AppComponent, EstadiosComponent, FinaisComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
