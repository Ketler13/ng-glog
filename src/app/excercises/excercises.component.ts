import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from './excercise.service';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css'],
  providers: [ExcerciseService]
})
export class ExcercisesComponent implements OnInit {

  constructor(private excerciseService: ExcerciseService) { }

  ngOnInit() {
    this.excerciseService.getExcercises();
  }

}
