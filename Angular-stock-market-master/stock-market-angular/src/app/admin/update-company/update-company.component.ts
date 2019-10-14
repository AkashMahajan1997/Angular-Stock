import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {Company} from './entity';

@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  allExchanges: any = ['BSE', 'NSE', 'NASDAQ', 'NYSE'];
  allSector: any = ['IT', 'infotainment', 'Finance', 'Real-estate'];
 updateForm : FormGroup  ;
 submitted = false;
 
  
  constructor(private _location: Location,private formBuilder: FormBuilder) {
    
    
   }
    ngOnInit() {
  this.updateForm = this.formBuilder.group({
      
    companyName: ['',[Validators.required]],
    turnover: ['',[Validators.required]],
    CEO:['',[Validators.required]],
    boardOfDirector:['',[Validators.required]],
    aboutCompany: ['',[Validators.required]],
    stockExchange: [null,[Validators.required]],
    sector: [null,[Validators.required]],
    });
    
  }

  public void updateCompany(Company company) {
		Company comp = getCompanyById(company.getArticleId());
	  comp.setTitle(company.getTitle());
		comp.setCategory(company.getCategory());
		entityManager.flush();
	}
  

  changeStock(e) {
    this.updateForm.controls['stockExhange'].setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeSector(e) {
    this.updateForm.controls['sector'].setValue(e.target.value, {
      onlySelf: true
    })
  } 
  resetForm(updateform: FormGroup) {
		updateform.reset();
  }
  get f() { return this.updateForm.controls; }

  onSubmit(){
   
    this.submitted = true;
    if (this.updateForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.updateForm.value))
 

  }
  
  

  backClicked() {
    this._location.back();
  }
}
