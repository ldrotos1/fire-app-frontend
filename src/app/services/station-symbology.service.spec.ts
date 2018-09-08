import { TestBed, inject } from '@angular/core/testing';

import { StationSymbologyService } from './station-symbology.service';

describe('StationSymbologyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationSymbologyService]
    });
  });

  it('should be created', inject([StationSymbologyService], (service: StationSymbologyService) => {
    expect(service).toBeTruthy();
  }));
});
