import { Component, OnInit } from '@angular/core';

import { SplitService } from '../split.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  public excercises: number[];

  constructor(private ss: SplitService) {
    this.excercises = [];
  }

  ngOnInit() {
    const handler = this.ss.chipsHandler$$.subscribe(this.handle.bind(this));
  }

  handle(excercises) {
    this.excercises = excercises;
  }

}
