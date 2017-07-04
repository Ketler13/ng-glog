import { Component, OnInit, OnDestroy } from '@angular/core';

import { SplitService } from '../../shared/services/split.service';
import { ExcerciseInSplit } from '../../shared/classes/excercise-in-split';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit, OnDestroy {
  public excercises: ExcerciseInSplit[];
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
    this.excercises = excercises;
  }

  remove(name: string): void {
    this.ss.removeExcercise(name);
  }

}
