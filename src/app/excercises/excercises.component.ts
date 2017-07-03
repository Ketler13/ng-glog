import { Component, OnInit } from '@angular/core';

import { ExcerciseService } from './excercise.service';
import { Excercise } from './excercise';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css'],
  providers: [ExcerciseService]
})
export class ExcercisesComponent implements OnInit {
  loadingError: boolean = false;
  excercises: Excercise[];

  constructor(private excerciseService: ExcerciseService) { }

  ngOnInit() {
    this.excercises = null;
    this.excerciseService.getExcercises()
      .subscribe(excercises => {
        if (!excercises) {
          this.loadingError = true;
        } else {
          this.excercises = excercises;
          this.loadingError = false;
        }
      });
  }

}
