import { TestBed } from '@angular/core/testing';

import { Personaservice } from './personaservice';

describe('Personaservice', () => {
  let service: Personaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
