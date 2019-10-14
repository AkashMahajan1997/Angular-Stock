import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {Stock} from './entity';

@Component({
  selector: 'add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  stockForm : FormGroup  ;
 submitted = false;

  constructor(private _location: Location,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.stockForm = this.formBuilder.group({
      
      stockName: ['',[Validators.required]],
      aboutStock: ['',[Validators.required]],
      address:['',[Validators.required]],
      });
      
  }
  resetForm(stockform: FormGroup) {
		stockform.reset();
  }
  get f() { return this.stockForm.controls; }

  onStockFormSubmit() {
    this.processValidation = true;   
    if (this.stockForm.invalid) {
         return; //Validation failed, exit from method.
    }   
    //Form is valid, now perform create or update
          this.preProcessConfigurations();
    let stockName = this.stockForm.get('title').value.trim();
    if (this.stockIdToUpdate === null) {  
      //Handle create article
      let stock= new (null,stockName,about,address );	  
      this.companyService.createStock)
        .subscribe(successCode => {
                  this.statusCode = successCode;
      },
            errorCode => this.statusCode = errorCode);
    } 
    }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.stockForm.value))
 

  }

  backClicked() {
    this._location.back();
  }

}
