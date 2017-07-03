import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';
import { Excercise } from './excercise';

@Injectable()
export class ExcerciseService {
  private excercises: Excercise[];
  private BASE_URL = 'http://127.0.0.1:3000/api/';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http, private auth: AuthService) {
    this.excercises = [];
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'token': this.auth.getToken()
    });
    this.options = new RequestOptions({headers: this.headers});
  }

  getExcercises() {
    const url = this.BASE_URL + 'excercises';
    return this.http.get(url, this.options)
      .map(res => {
        const response = res.json();
        if (!response.success) {
          return false;
        }
        return response.excercises;
      });
  }

  checkTitleUnique(title: string): Observable<boolean> {
    const url = this.BASE_URL + 'checkExcerciseTitle?title=' + title;
    return this.http.get(url)
      .map(res => {
        const response = res.json();
        return response.success ? true : false;
      });
  }

  addExcercise(excercise: Excercise): Observable<boolean> {
    const url = this.BASE_URL + 'addExcercise';
    return this.http.post(url, excercise, this.options)
      .map(res => {
        const response = res.json();
        return response.success ? true : false;
      });
  }

}
