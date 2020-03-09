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
    let field;
    let type;
    this.keys.forEach(element => {
      field = this.fields[element].displayName;
      type = this.fields[element].type;
      this.addressFieldValues.push(this.fields[element].value);
      console.log("value",this.fields[element].value)
      this.addressFieldTypes.push(type);
      this.addressFields.push(field);
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
    this.saveAddress.emit(this.result)
  }

}
