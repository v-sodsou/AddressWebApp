import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }


  getCountries(){
    let url ="https://localhost:44365/address"
    let request = this.http.get<any>(url, {
      headers: new HttpHeaders({
        ["Content-Type"]: 'application/json',
      })
    });
    var response = request.subscribe();
    return response;
  }

  getCountryFormat(countryCode){
    let url = "https://localhost:44365/format/${countryCode}";
    let request= this.http.get<any>(url, {
      headers: new HttpHeaders({
        ["Content-Type"]: 'application/json',
      })
    });
    var response = request.subscribe();
    return response;
  }

  postAddress(address){
    console.log("Address to send", address);
    let url = "https://localhost:44365/addAddress";
    let request = this.http.post<any>(url, address, {
      headers: new HttpHeaders({
        ["Content-Type"]: 'application/json',
      })
    });
    var response = request.subscribe();
    return response;
  }

  postAddressFormat(addressFormat){
    let url = "https://localhost:44365/addAddressFormat";
    let request = this.http.post<any>(url, addressFormat, {
      headers: new HttpHeaders({
        ["Content-Type"]: 'application/json',
      })
    });
    var response = request.subscribe();
    return response;
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
    return response;
  }

}
