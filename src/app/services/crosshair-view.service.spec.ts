import { TestBed, inject } from '@angular/core/testing';

import { CrosshairViewService } from './crosshair-view.service';

describe('CrosshairViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrosshairViewService]
    });
  });

  it('should be created', inject([CrosshairViewService], (service: CrosshairViewService) => {
    expect(service).toBeTruthy();
  }));
});
