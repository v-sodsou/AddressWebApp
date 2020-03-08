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
    let url = `https://locathost:5000/getAllCountries/searchAddressFormat/${countryCode}`;
    return this.http.get<any>(url);
  }

  postAddress(){
    
  }

  postAddressFormat(){
    
  }

  getAddress(){

  }

}
