import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  toast: boolean = false;

  constructor() { }

  @ViewChild('f') signupForm: NgForm;
  user = {
    password: '',
    email: ''
  };
  submitted = false;


  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.toast = true;
    this.signupForm.reset();
    setTimeout(() => {
      this.toast = false;
    }, 3000);
  }




  ngOnInit() {
  }

}
