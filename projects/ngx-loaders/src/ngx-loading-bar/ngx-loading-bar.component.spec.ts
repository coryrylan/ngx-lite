import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingBarComponent } from './ngx-loading-bar.component';

describe('NgxLoadingBarComponent', () => {
  let component: NgxLoadingBarComponent;
  let fixture: ComponentFixture<NgxLoadingBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgxLoadingBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
