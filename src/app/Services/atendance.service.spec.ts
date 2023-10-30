import { TestBed } from '@angular/core/testing';

import { AtendanceService } from './atendance.service';

describe('AtendanceService', () => {
  let service: AtendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
