import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SplitService } from './split.service';
import { ExcerciseService } from '../excercises/excercise.service';
import { Excercise } from '../excercises/excercise';

@Component({
  selector: 'app-new-split',
  templateUrl: './new-split.component.html',
  styleUrls: ['./new-split.component.css'],
  providers: [SplitService]
})
export class NewSplitComponent implements OnInit {
  splitForm: FormGroup;
  excercises: Excercise[];
  formArrayHelper = [];

  constructor(
    private excerciseService: ExcerciseService,
    private fb: FormBuilder,
    private splitService: SplitService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadExcercises();
  }

  createForm() {
    this.splitForm = this.fb.group({
      excercisesArray: this.fb.array([])
    });
  }

  loadExcercises(): void {
    this.excerciseService.getExcercises()
      .subscribe(excercises => this.excercises = excercises);
  }

  get excercisesArray() {
    return this.splitForm.get('excercisesArray') as FormArray;
  }

  handleSet(data) {
    if (data.checked) {
      this.excercisesArray.push(this.fb.group({
        weight: 0,
        times: 0,
        id: data.id,
        title: data.title
      }));
      this.formArrayHelper.push(data.id);
    } else {
      const index = this.formArrayHelper.indexOf(data.id);
      this.formArrayHelper = this.formArrayHelper.filter((_, i) => i !== index);
      const element = this.excercisesArray.removeAt(index);
    }
  }

  log(exc) {
    console.log(exc);
  }

}
