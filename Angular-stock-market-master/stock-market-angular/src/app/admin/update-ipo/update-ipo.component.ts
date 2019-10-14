import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {Iop} from './entity';

@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  allExchanges: any = ['BSE', 'NSE', 'NASDAQ', 'NYSE'];
  ipoForm : FormGroup  ;
 submitted = false;
  
 constructor(private formBuilder: FormBuilder) {
  
    
    
}

  ngOnInit() {
    this.ipoForm = this.formBuilder.group({
      
      IopName: ['',[Validators.required]],
      price: ['',[Validators.required]],
      address:['',[Validators.required]],
      noOfShares:['',[Validators.required]],
      date: ['',[Validators.required]],
      stockExchange: [null,[Validators.required]],
    
      });
  }

  public void updateIop(Iop iop) {
		Iop i = getIopById(iop.getArticleId());
	  i.setTitle(iop.getTitle());
		i.setCategory(iop.getCategory());
		entityManager.flush();
  }
  
 
  onSubmit(){
   
    this.submitted = true;
    if (this.ipoForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ipoForm.value))
 

  }

}
