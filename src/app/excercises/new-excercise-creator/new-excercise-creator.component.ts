import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { ExcerciseService } from '../excercise.service';

@Component({
  selector: 'app-new-excercise-creator',
  templateUrl: './new-excercise-creator.component.html',
  styleUrls: ['./new-excercise-creator.component.css']
})
export class NewExcerciseCreatorComponent implements OnInit {
  @Output() excerciseWasCreated = new EventEmitter<null>();
  newExcerciseForm: FormGroup;
  uniqueError: string;
  error: string;
  isOpen: boolean = false;

  constructor(private fb: FormBuilder, private excerciseService: ExcerciseService) {
    this.createForm();
    this.subscribeToForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.newExcerciseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      text: ['', [Validators.required]]
    });
  }

  subscribeToForm() {
    this.newExcerciseForm.controls.title.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(val => val.length)
      .switchMap(title => this.excerciseService.checkTitleUnique(title))
      .subscribe(res => {
        if (!res) {
          this.uniqueError = 'title is already in use';
          this.newExcerciseForm.controls.title.setErrors({
            unique: 'excercise already exists'
          });
        } else {
          this.uniqueError = null;
        }
      })
  }

  allInputsFilled() {
    return !this.newExcerciseForm.controls.title.errors && !this.newExcerciseForm.controls.text.errors
  }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    this.excerciseService
      .addExcercise(this.newExcerciseForm.value)
      .filter(res => {
        if (!res) {
          this.error = 'Excercise haven\'t been created';
          return false;
        }
        return true;
      })
      .switchMap(res => this.excerciseService.getExcercises())
      .subscribe(excercises => {
        if (excercises) {
          this.excerciseWasCreated.emit();
          setTimeout(() => {
            this.toggleForm();
          }, 300);
        }
      })
  }

}
