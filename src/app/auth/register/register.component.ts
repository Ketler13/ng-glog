import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit() {
    this.auth.register(this.loginForm.value);
  }

}
