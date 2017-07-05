import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { SplitService } from '../shared/services/split.service';
import { Split } from '../shared/classes/split';

@Component({
  selector: 'app-splits',
  templateUrl: './splits.component.html',
  styleUrls: ['./splits.component.css']
})
export class SplitsComponent implements OnInit {
  splits: Split[];

  constructor(private ss: SplitService) {
  }

  ngOnInit(): void {
    this.ss.loadSplits().subscribe(splits => {
      this.splits = splits;
    });
  }

  removeSplit(id: string): void {
    this.ss.removeSplit(id)
      .switchMap(res => {
        if (res) {
          return this.ss.loadSplits();
        }
      })
      .subscribe(splits => this.splits = splits);
  }

}
