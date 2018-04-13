import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputDatepickerComponent } from './ngx-input-datepicker.component';

describe('NgxInputDatepickerComponent', () => {
  let component: NgxInputDatepickerComponent;
  let fixture: ComponentFixture<NgxInputDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInputDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
