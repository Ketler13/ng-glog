import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

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
  }

  allInputsFilled() {
    return (
      !this.registerForm.controls.name.errors
      && !this.registerForm.controls.email.errors
      && !this.registerForm.controls.password.errors
    )
  }

  submit() {
    this.auth.register(this.registerForm.value);
  }

}
