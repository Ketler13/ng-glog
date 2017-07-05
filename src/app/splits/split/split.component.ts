import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Split } from '../../shared/classes/split';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent implements OnInit {
  @Input() split: Split;
  @Output() removeSplit = new EventEmitter<string>();
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  onRemove(): void {
    this.removeSplit.emit(this.split.id);
  }

}
