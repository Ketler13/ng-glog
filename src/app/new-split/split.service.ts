import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';
import { Excercise } from '../excercises/excercise';

@Injectable()
export class SplitService {
  private token: string;

  constructor(private http: Http, private authService: AuthService) {
    this.token = this.authService.getToken();
    console.log(this.token);
  }

}
