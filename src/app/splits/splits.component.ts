import { Component, OnInit } from '@angular/core';

import { SplitService } from '../shared/services/split.service';

@Component({
  selector: 'app-splits',
  templateUrl: './splits.component.html',
  styleUrls: ['./splits.component.css']
})
export class SplitsComponent implements OnInit {

  constructor(private ss: SplitService) { }

  ngOnInit() {
  }

}
