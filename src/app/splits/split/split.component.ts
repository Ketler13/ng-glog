import { Component, OnInit, Input } from '@angular/core';
import { Split } from '../../shared/classes/split';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  @Input() split: Split;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
