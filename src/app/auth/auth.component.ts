import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  selectedIndex = 1;

  goToLogin() {
    this.selectedIndex = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
