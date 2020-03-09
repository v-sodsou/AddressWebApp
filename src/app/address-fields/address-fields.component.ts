import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.scss']
})
export class AddressFieldsComponent implements OnInit {
  @Input() addressFieldTemplate;
  @Output() getAddress = new EventEmitter();
  @Output() saveAddress = new EventEmitter();

  error;
  addressFields = [];
  addressFieldTypes = [];
  addressFieldValues = [];
  keys = [];
  result : any = {};

  fields : any = {
    address1: { displayName : "Street 1", format : "[0-9][A-Z]", type: "string",value:[]},
    address2: {displayName : "Street 1", format : "[0-9][A-Z]", type: "string",value:[]},
    city: {displayName : "City", format : "[A-Z]",type: "string",value:[]},
    state: {displayName : "State", format : "[A-Z]",type: "list", value:['WA','CA']},
    zipcode: {displayName : "Zip Code", format : "[A-Z]",type: "string",value:[]}
  };

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.fields);
    this.keys.forEach(element => {
      this.addressFieldValues.push(this.fields[element].value);
      this.addressFieldTypes.push(this.fields[element].type);
      this.addressFields.push(this.fields[element].displayName);
    });

    
    console.log("this.addressFields length",this.addressFields.length)
  }

  onKey(event: any) { 
    this.result[event.target.id] = event.target.value;
    console.log("result",this.result)
  }

  selected(event: any){
    this.result[event.target.id] = event.target.value;
    console.log("result",this.result)
  }

  searchAddress(){
    this.getAddress.emit(this.result);
  }

  postAddress(){
    this.checkIfFieldValuesFilled(this.result);
    this.saveAddress.emit(this.result)
  }

  checkIfFieldValuesFilled(addressFields){
    let count = 0
    let reqFieldLen = this.keys.length;
    this.keys.forEach(element => {
      if(addressFields[element]){
        count++;
      }
    });
    this.error = count == reqFieldLen ? false:true;
    console.log("error",this.error)
  }

}
