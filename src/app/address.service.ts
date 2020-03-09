import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getCountries(){
    let url ="https://locathost:5000/getAllCountries/"
    return this.http.get<any>(url);
  }

  getCountryFormat(countryCode){
    let url = `https://locathost:5000/searchAddressFormat/${countryCode}`;
    return this.http.get<any>(url);
  }

  postAddress(){
    
  }

  postAddressFormat(){
    
  }

  searchAddress(address){
    console.log("Address to send", address);
    let url = "https://locathost:5000/searchAddress";
    return this.http.post<any>(url, address);
  }

}
