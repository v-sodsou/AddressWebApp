import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address-app';
  countryCode;

  getCountryFields(countryCode){
    this.countryCode = countryCode;
    console.log("CountryCode captured",countryCode)

  }
}
