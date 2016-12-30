import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signin } from "./signin.interface";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  signin: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.signin = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required ]],
    });
  }
  onSubmit({ value, valid }: { value: Signin, valid: boolean }) {
    console.log(value, valid);
  }
}


