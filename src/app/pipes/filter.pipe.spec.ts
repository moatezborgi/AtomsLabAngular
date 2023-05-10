import { TestBed } from '@angular/core/testing';

import { FilterPipe } from './filter.pipe';

describe('DutyService', () => {
  let service: FilterPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
