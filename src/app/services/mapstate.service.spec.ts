import { TestBed, inject } from '@angular/core/testing';

import { MapstateService } from './mapstate.service';

describe('MapstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapstateService]
    });
  });

  it('should be created', inject([MapstateService], (service: MapstateService) => {
    expect(service).toBeTruthy();
  }));
});
