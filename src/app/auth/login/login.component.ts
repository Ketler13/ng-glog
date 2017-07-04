import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm();
    this.error = null;
  }

  ngOnInit() {
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  allInputsFilled() {
    return !this.loginForm.controls.email.errors && !this.loginForm.controls.password.errors
  }

  submit() {
    this.auth.login(this.loginForm.value)
      .subscribe(res => {
        res ? this.router.navigate(['/newsplit']) : this.error = "Invalid data"
      });
  }

}
