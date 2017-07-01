import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
  //private BASE_URL: string = 'http://ketler-glog.herokuapp.com/api/';
  private BASE_URL = 'http://127.0.0.1:3000/api/';
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  login(data) {
    const url = this.BASE_URL + 'login';
    this.http.post(url, data, this.headers)
      .subscribe(console.log);
  }

  register(data) {
    const url = this.BASE_URL + 'register';
    this.http.post(url, data, this.headers)
      .subscribe(console.log);
  }

}
