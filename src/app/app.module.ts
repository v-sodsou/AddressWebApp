import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { AddressFieldsComponent } from './address-fields/address-fields.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    AddressFieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
