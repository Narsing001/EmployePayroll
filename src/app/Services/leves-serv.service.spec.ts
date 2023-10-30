import { TestBed } from '@angular/core/testing';

import { LevesServService } from './leves-serv.service';

describe('LevesServService', () => {
  let service: LevesServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevesServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
