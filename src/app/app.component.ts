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
    this.addressService.getCountryFormat("USA");
    console.log("CountryCode captured",countryCode);
  }

  //searchAddress(addressFields) {
  // addressFields['Country'] = this.countryCode;
  // console.log("Object that will be sent to backend",addressFields)
  // this.addressService.searchAddress(addressFields);
  //}

  searchAddress(addressFields) {
    addressFields['Country'] = this.countryCode;
    var jsonObj = JSON.stringify(addressFields); 
    console.log("Object that will be sent to backend", jsonObj)
    this.addressService.searchAddress(jsonObj);
  }

  saveAddress(addressFields){
    addressFields['Country'] = this.countryCode;
    var jsonObj = JSON.stringify(addressFields); 
    console.log("Object that will be posted to backend", jsonObj)
    this.addressService.postAddress(jsonObj);
  }
}
