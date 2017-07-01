import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSplitComponent } from './new-split.component';

describe('NewSplitComponent', () => {
  let component: NewSplitComponent;
  let fixture: ComponentFixture<NewSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
