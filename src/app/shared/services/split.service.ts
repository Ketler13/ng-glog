import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


import { AuthService } from './auth.service';
import { ExcerciseInSplit } from '../classes/excercise-in-split';
import { Split } from '../classes/split';

@Injectable()
export class SplitService {
  private BASE_URL = '/api/';
  private headers: Headers;
  private options: RequestOptions;
  private token: string;
  private userId: string;
  private date: string;
  chipsHandler$$: Subject<ExcerciseInSplit[]>;
  excercisesLength$$: Subject<number>;
  excercises: ExcerciseInSplit[];

  constructor(private http: Http, private authService: AuthService) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'token': this.authService.getToken()
    });
    this.options = new RequestOptions({headers: this.headers});
    this.token = this.authService.getToken();
    this.userId = this.authService.getUserId();
    this.excercises = [];
    this.chipsHandler$$ = new Subject();
    this.excercisesLength$$ = new Subject();
  }

  setDate(date: string) {
    this.date = date;
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
    this.excercisesLength$$.next(this.excercises.length);
  }

  removeExcercise(name: string) {
    this.excercises = this.excercises.filter(
      e => e.name !== name
    )
    this.chipsHandler$$.next(this.excercises);
    this.excercisesLength$$.next(this.excercises.length);
  }

  prepareSplit() {
    if (!this.excercises.length) { return false }
    const now = new Date();
    const date = this.date || now.toLocaleDateString();
    return {
      excercises: this.excercises,
      mark: '0',
      date,
      user: this.userId
    }
  }

  addSplit(): Observable<boolean> {
    const split = this.prepareSplit();
    if (split) {
      const url = this.BASE_URL + 'addSplit'
      return this.http
        .post(url, split, this.options)
        .map(res => res.json().success ? true : false);
    }
  }

  clearSplit() {
    this.excercises = [];
  }

  loadSplits(): Observable<Split[]> {
    const url = this.BASE_URL + 'splits';
    return this.http.post(url, {user: this.userId}, this.options)
      .map(res => res.json() as Split[]);
  }

  removeSplit(id: string): Observable<boolean> {
    const url = this.BASE_URL + 'splits/' + id;
    return this.http.delete(url, this.options)
      .map(res => res.json().success ? true : false);
  }

  setRate(id: string, rate: number): Observable<boolean> {
    const url = this.BASE_URL + 'splits/' + id;
    return this.http.patch(url, {rate}, this.options)
      .map(res => res.json().success ? true : false)
      .catch(err => Observable.of(false));
  }

}
