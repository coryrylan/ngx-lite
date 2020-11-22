import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingSpinnerComponent } from './ngx-loading-spinner.component';

describe('NgxLoadingSpinnerComponent', () => {
  let component: NgxLoadingSpinnerComponent;
  let fixture: ComponentFixture<NgxLoadingSpinnerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxLoadingSpinnerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
