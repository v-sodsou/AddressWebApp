import { Component } from '@angular/core';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address-app';
  countryCode;

  constructor(private addressService:AddressService){}

  getCountryFields(countryCode){
    this.countryCode = countryCode;
    console.log("CountryCode captured",countryCode);
  }

  searchAddress(addressFields) {
   addressFields['Country'] = this.countryCode;
   console.log("Object that will be sent to backend",addressFields)
   this.addressService.searchAddress(addressFields);
  }

  saveAddress(addressFields){
    addressFields['Country'] = this.countryCode;
    console.log("Object that will be posted to backend",addressFields)
    this.addressService.postAddress(addressFields);
  }
}
