import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExcerciseService } from '../excercises/excercise.service';
import { Excercise } from '../excercises/excercise';

@Component({
  selector: 'app-new-split',
  templateUrl: './new-split.component.html',
  styleUrls: ['./new-split.component.css']
})
export class NewSplitComponent implements OnInit {
  splitForm: FormGroup;
  excercises: Excercise[];
  formArrayHelper = [];

  constructor(
    private excerciseService: ExcerciseService,
    private fb: FormBuilder
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
        weight: '',
        times: '',
        id: data.id
      }));
      this.formArrayHelper.push(data.id);
    } else {
      const index = this.formArrayHelper.indexOf(data.id);
      const element = this.excercisesArray.removeAt(index);
    }
  }

  log() {
    console.log(this.splitForm.value);
  }

}
