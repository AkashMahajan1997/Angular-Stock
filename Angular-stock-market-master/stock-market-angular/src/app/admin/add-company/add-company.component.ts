import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  allExchanges: any = ['BSE', 'NSE', 'NASDAQ', 'NYSE'];
  allSector: any = ['IT', 'infotainment', 'Finance', 'Real-estate'];
 addForm : FormGroup  ;
 submitted = false;
 
  
  constructor(private _location: Location,private formBuilder: FormBuilder) {
  
   }

   
    ngOnInit() {
  this.addForm = this.formBuilder.group({
      
    companyName: ['',[Validators.required]],
    turnover: ['',[Validators.required]],
    CEO:['',[Validators.required]],
    boardOfDirector:['',[Validators.required]],
    aboutCompany: ['',[Validators.required]],
    stockExchange: [null,[Validators.required]],
    sector: [null,[Validators.required]],
    });
    
  }

onCompanyFormSubmit() {
this.processValidation = true;   
if (this.addForm.invalid) {
     return; //Validation failed, exit from method.
}   
//Form is valid, now perform create or update
      this.preProcessConfigurations();
let companyName = this.addForm.get('title').value.trim();
if (this.comapnyIdToUpdate === null) {  
  //Handle create article
  let company= new (null,companyName,turnover,ceo,boardOfDirector,aboutCompany,stockExchange,sector );	  
  this.companyService.createComapny(company)
    .subscribe(successCode => {
              this.statusCode = successCode;
  },
        errorCode => this.statusCode = errorCode);
} 
}

  backClicked() {
    this._location.back();
  }
  
  
}