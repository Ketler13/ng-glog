import { Component, OnInit, OnDestroy } from '@angular/core';

import { SplitService } from '../split.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit, OnDestroy {
  public excercises: number[];
  private handler;

  constructor(private ss: SplitService) {
    this.excercises = [];
  }

  ngOnInit() {
    this.handler = this.ss.chipsHandler$$.subscribe(this.handle.bind(this));
  }

  ngOnDestroy() {
    this.handler.unsubscribe();
  }

  handle(excercises) {
    console.log(excercises)
    this.excercises = excercises;
  }

  remove(name: string): void {
    this.ss.removeExcercise(name);
  }

}
