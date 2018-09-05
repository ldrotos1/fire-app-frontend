import { TestBed, inject } from '@angular/core/testing';

import { ApparatusService } from './apparatus.service';

describe('ApparatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApparatusService]
    });
  });

  it('should be created', inject([ApparatusService], (service: ApparatusService) => {
    expect(service).toBeTruthy();
  }));
});
