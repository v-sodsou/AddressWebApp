import { Component } from '@angular/core';
import { AddressService } from './address.service';
import { of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address-app';
  countryCode;
  searchResults$;

  constructor(private addressService:AddressService,private http: HttpClient){}

  getCountryFields(countryCode){
    this.countryCode = countryCode;
    console.log("CountryCode captured",countryCode);
  }

  //searchAddress(addressFields) {
  // addressFields['Country'] = this.countryCode;
  // console.log("Object that will be sent to backend",addressFields)
  // this.addressService.searchAddress(addressFields);
  //}

  async searchAddress(addressFields) {
    addressFields['Country'] = this.countryCode;
    var jsonObj = JSON.stringify(addressFields); 
    console.log("Object that will be sent to backend", jsonObj)
    //this.searchResults$ = this.addressService.searchAddress(jsonObj);
    //console.log("search results",this.searchResults$)

    let url = "https://localhost:5001/searchAddress";
    let request = this.http.post<any>(url, jsonObj, {
      headers: new HttpHeaders({
        ["Content-Type"]: 'application/json',
      })
    });
    let result;
    var response = request.subscribe(response => {
      result = response;
      console.log("result",result);

    });
  }

  saveAddress(addressFields){
    addressFields['Country'] = this.countryCode;
    console.log("Object that will be posted to backend",addressFields)
    
    this.addressService.postAddress(addressFields);
  }
}
