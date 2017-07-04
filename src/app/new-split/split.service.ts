import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { AuthService } from '../auth/auth.service';
import { Excercise } from './excercise';

@Injectable()
export class SplitService {
  private token: string;
  private userName: string;
  excercises;
  split;

  constructor(private http: Http, private authService: AuthService) {
    this.token = this.authService.getToken();
    this.userName = this.authService.getUserName();
    this.excercises = [];
  }

  addSetToService(data) {
    const value = data.weight + 'x' + data.times;
    const set = {
      name: data.title,
      sets: [value]
    }
    const excerciseInArray = this.excercises.find(
      excercise => excercise.name === data.title
    );
    if (!excerciseInArray) {
      this.excercises.push(set)
    } else {
      this.excercises = this.excercises.map(
        e => (
          e.name === data.title
          ? {...e, sets: e.sets.concat(value)}
          : e
        )
      );
    };
  }

  addSplit() {
    console.log(this.excercises);
  }

}
