import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService {
  //private BASE_URL: string = 'http://ketler-glog.herokuapp.com/api/';
  private BASE_URL = 'http://127.0.0.1:3000/api/';
  private headers: Headers;
  loginChecker: Subject<any>;
  isLoggedIn: boolean;
  private user: User;
  private token: string;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.isLoggedIn = false;
    this.loginChecker = new Subject();
  }

  login(data) {
    const url = this.BASE_URL + 'login';
    return this.http.post(url, data, this.headers)
      .map(res => {
        const data = res.json();
        if (!data.success) { return false }
        this.isLoggedIn = true;
        this.user = data.user;
        this.token = data.token;
        this.loginChecker.next(true);
        return true;
      });
  }

  register(data) {
    const url = this.BASE_URL + 'register';
    return this.http.post(url, data, this.headers)
      .map(res => {
        const data = res.json();
        if (!data.success) { return false }
        return true;
      })
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    this.token = null;
    this.loginChecker.next(false);
  }

  checkEmailUnique(email: string) {
    const url = this.BASE_URL + 'checkEmail';
    return this.http
      .post(url, {email}, this.headers)
      .map(res => res.json().success ? true : false);
  }

  checkNameUnqique(name: string) {
    const url = this.BASE_URL + 'checkName';
    return this.http
      .post(url, {name}, this.headers)
      .map(res => res.json().success ? true : false);
  }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.user.id;
  }

}
