import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExcerciseCreatorComponent } from './new-excercise-creator.component';

describe('NewExcerciseCreatorComponent', () => {
  let component: NewExcerciseCreatorComponent;
  let fixture: ComponentFixture<NewExcerciseCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExcerciseCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExcerciseCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
