import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.scss']
})
export class AddressFieldsComponent implements OnInit,OnChanges {
  @Input() addressFieldTemplate;
  @Output() getAddress = new EventEmitter();
  @Output() saveAddress = new EventEmitter();

  error;
  addressFields = [];
  addressFieldTypes = [];
  addressFieldValues = [];
  keys = [];
  result : any = {};
  showButtons:boolean=false;

  // fields : any = {
  //   addressLine1: { displayName : "Street 1", format : "[0-9][A-Z]", type: "string",value:[]},
  //   addressLine2: {displayName : "Street 1", format : "[0-9][A-Z]", type: "string",value:[]},
  //   city: {displayName : "City", format : "[A-Z]",type: "string",value:[]},
  //   state: {displayName : "State", format : "[A-Z]",type: "list", value:['WA','CA']},
  //   zipcode: {displayName : "Zip Code", format : "[A-Z]",type: "string",value:[]}
  // };

  constructor() { 
    
  }

  ngOnInit() {
  // console.log(this.addressFieldTemplate)
  // if(this.addressFieldTemplate){
  //   this.addressFieldValues =[];
  //   this.addressFieldTypes = [];
  //   this.addressFields =[];
  //   this.keys =[];
  //   this.keys = Object.keys(this.addressFieldTemplate);
  //   this.keys.forEach(element => {
  //     if(element!="id"){
  //       this.addressFieldValues.push(this.addressFieldTemplate[element].Value);
  //       this.addressFieldTypes.push(this.addressFieldTemplate[element].Type);
  //       this.addressFields.push(this.addressFieldTemplate[element].DisplayName);
  //     }
     
  //   });
  //   this.showButtons = true;

  // }
  //   console.log("this.addressFields length",this.addressFields.length)
  }

  ngOnChanges(changes: SimpleChanges) {
		if (changes.addressFieldTemplate && changes.addressFieldTemplate.currentValue) {
      console.log("Address template",this.addressFieldTemplate)
      if(this.addressFieldTemplate){
        this.addressFieldValues =[];
        this.addressFieldTypes = [];
        this.addressFields =[];
        this.keys =[];
        this.keys = Object.keys(this.addressFieldTemplate);
        this.keys.forEach(element => {
          this.addressFieldValues.push(this.addressFieldTemplate[element].Value);
          this.addressFieldTypes.push(this.addressFieldTemplate[element].Type);
          this.addressFields.push(this.addressFieldTemplate[element].DisplayName);
        });
        this.showButtons = true;
    
      }
		}
	
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
    this.error = false;
    this.getAddress.emit(this.result);
  }

  postAddress(){
    this.checkIfFieldValuesFilled(this.result);
    this.saveAddress.emit(this.result)
  }

  checkIfFieldValuesFilled(addressFields){
    let count = 0
    console.log("Check adress fields", addressFields);
    let reqFieldLen = this.keys.length-2;
    this.keys.forEach(element => {
      console.log ("error check",element)
      if (element != "id" && element != "Country"){
        console.log("inside if")
        if(addressFields[element]){
          count++;
        }
      }
    });
    console.log("count",count);
    console.log("reqFieldLen",reqFieldLen)
    this.error = count == reqFieldLen ? false:true;
    console.log("error",this.error)
  }

}
