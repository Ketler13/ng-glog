import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Excercise } from '../../excercises/excercise';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Input() excercises: Excercise[];
  @Output() emitChecking = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  handleChecking(checked, id, title) {
    this.emitChecking.emit({checked, id, title});
  }

}
