import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.loginChecker.subscribe(res => this.isLoggedIn = res);
  }

  logOut() {
    this.auth.logout();
  }

}
