import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  
  

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          userName: ['', Validators.required],
          password: ['', [Validators.required]],
     });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.router.navigateByUrl('/admin');
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
 
}
