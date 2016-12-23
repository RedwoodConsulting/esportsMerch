import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})

export class SignupFormComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}


