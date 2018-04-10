import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProgressCircleComponent } from './ngx-progress-circle.component';

describe('NgxProgressCircleComponent', () => {
  let component: NgxProgressCircleComponent;
  let fixture: ComponentFixture<NgxProgressCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxProgressCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
