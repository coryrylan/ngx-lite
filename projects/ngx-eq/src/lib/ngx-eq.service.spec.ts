import { TestBed, inject } from '@angular/core/testing';

import { NgxEqService } from './ngx-eq.service';

describe('NgxEqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxEqService]
    });
  });

  it('should be created', inject([NgxEqService], (service: NgxEqService) => {
    expect(service).toBeTruthy();
  }));
});
