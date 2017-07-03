import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailError: string = null;
  nameError: string = null;
  userWasCreated: boolean = null;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm.controls.email.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(val => val.length)
      .switchMap(email => this.auth.checkEmailUnique(email))
      .subscribe(res => {
        if (!res) {
          this.emailError = 'Email is already in use';
          this.registerForm.controls.email.setErrors({
            unique: 'email is already in use'
          });
        } else {
          this.emailError = null;
        }
      });

      this.registerForm.controls.name.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(val => val.length)
      .switchMap(name => this.auth.checkNameUnqique(name))
      .subscribe(res => {
        if (!res) {
          this.nameError = 'Name is already in use';
          this.registerForm.controls.name.setErrors({
            unique: 'name is already in use'
          });
        } else {
          this.nameError = null;
        }
      });
  }

  allInputsFilled() {
    return (
      !this.registerForm.controls.name.errors
      && !this.registerForm.controls.email.errors
      && !this.registerForm.controls.password.errors
    )
  }

  submit() {
    this.auth.register(this.registerForm.value)
      .subscribe(res => {
        this.userWasCreated = res ? true  : false;
      });
  }

}
