import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { AuthService } from '../auth/auth.service';
import { Excercise } from './excercise';

@Injectable()
export class SplitService {
  private token: string;
  private userId: string;
  chipsHandler$$: Subject<Excercise[]>;
  excercises;
  split;

  constructor(private http: Http, private authService: AuthService) {
    this.token = this.authService.getToken();
    this.userId = this.authService.getUserId();
    this.excercises = [];
    this.chipsHandler$$ = new Subject();
  }

  addSet(data) {
    const value = data.weight + 'x' + data.times;
    const set = {
      name: data.title,
      sets: [value]
    }
    const excerciseInArray = this.excercises.find(
      excercise => excercise.name === data.title
    );
    if (!excerciseInArray) {
      this.excercises.push(set);
    } else {
      this.excercises = this.excercises.map(
        e => (
          e.name === data.title
          ? {...e, sets: e.sets.concat(value)}
          : e
        )
      );
    }
    this.chipsHandler$$.next(this.excercises);
  }

  removeExcercise(name: string) {
    this.excercises = this.excercises.filter(
      e => e.name !== name
    )
    this.chipsHandler$$.next(this.excercises);
  }

  prepareSplit() {
    if (!this.excercises.length) { return false }
    const now = new Date();
    const date = now.toLocaleDateString();
    return {
      excercises: this.excercises,
      mark: '0',
      date,
      user: this.userId
    }
  }

  addSplit() {
    const split = this.prepareSplit();
    if (split) {
      console.log(split);
    }
  }

  clearSet() {
    this.excercises = [];
  }

}
