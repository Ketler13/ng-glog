import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SplitService } from '../../shared/services/split.service';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.css']
})
export class RaterComponent implements OnInit {
  @Input() rate: string;
  @Input() id: string;
  @Output() newRate = new EventEmitter<string>();
  rateArray: string[];
  rateNum: number;

  constructor(private ss: SplitService) { }

  ngOnInit() {
    this.rateNum = +this.rate;
    this.rateArray = Array(5).fill('1');
  }

  setRate(rate) {
    this.ss.setRate(this.id, rate)
      .subscribe(res => {
        if (res) {
          this.rateNum = rate;
          this.newRate.emit(String(rate)); 
        }
      });
  }

}
