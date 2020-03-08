import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.scss']
})
export class AddressFieldsComponent implements OnInit {
  @Input() addressFieldTemplate;

  addressFields = [];
  addressFieldTypes = [];

  fields : any = {
    address1: { displayName : "Street 1", format : "[0-9][A-Z]", type: "string"},
    address2: {displayName : "Street 1", format : "[0-9][A-Z]", type: "string"},
    city: {displayName : "City", format : "[A-Z]",type: "string"},
    state: {displayName : "State", format : "[A-Z]",type: "list"},
    zipcode: {displayName : "Zip Code", format : "[A-Z]",type: "string"}
  };

  constructor() { }

  ngOnInit() {
    let keys = Object.keys(this.fields);
    let field;
    let type;
    keys.forEach(element => {
      field = this.fields[element].displayName;
      type = this.fields[element].type;
      this.addressFieldTypes.push(type);
      this.addressFields.push(field);
    });

    console.log("this.addressFields length",this.addressFields.length)
  }

}
