import { TestBed, inject } from '@angular/core/testing';

import { WebPropertiesService } from './web-properties.service';

describe('WebPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebPropertiesService]
    });
  });

  it('should be created', inject([WebPropertiesService], (service: WebPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
