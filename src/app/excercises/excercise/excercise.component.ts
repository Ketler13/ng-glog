import { Component, OnInit, Input } from '@angular/core';

import { Excercise } from '../../shared/classes/excercise';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent implements OnInit {
  @Input() excercise: Excercise;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleBody() {
    this.isOpen = !this.isOpen;
  }

}
