import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }


  getCountries(){
    let url ="https://locathost:5000/api/addresses/getAllCountries/"
    return this.http.get<any>(url);
  }

  getCountryFormat(countryCode){
    let url = `https://locathost:5000/api/addresses/searchAddressFormat/${countryCode}`;
    return this.http.get<any>(url);
  }

  postAddress(address){
    console.log("Address to send", address);
    let url = "https://locathost:5000/api/addresses/postAddress";
    return this.http.post<any>(url, {address});
  }

  postAddressFormat(){
    
  }

  searchAddress(address) {
    console.log("Address to send", address);
    let url = "https://localhost:44365/searchAddress";
    let request = this.http.post<any>(url, address, {
      headers: new HttpHeaders({
        ["Content-Type"]: 'application/json',
      })
    });
    var response = request.subscribe();
  }

}
