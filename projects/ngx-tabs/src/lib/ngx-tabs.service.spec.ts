import { TestBed, inject } from '@angular/core/testing';

import { NgxTabsService } from './ngx-tabs.service';

describe('NgxTabsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTabsService]
    });
  });

  it('should be created', inject([NgxTabsService], (service: NgxTabsService) => {
    expect(service).toBeTruthy();
  }));
});
