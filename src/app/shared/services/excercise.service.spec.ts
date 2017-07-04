import { TestBed, inject } from '@angular/core/testing';

import { ExcerciseService } from './excercise.service';

describe('ExcerciseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcerciseService]
    });
  });

  it('should be created', inject([ExcerciseService], (service: ExcerciseService) => {
    expect(service).toBeTruthy();
  }));
});
