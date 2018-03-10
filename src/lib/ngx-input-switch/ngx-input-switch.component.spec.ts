import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputSwitchComponent } from './ngx-input-switch.component';

describe('NgxInputSwitchComponent', () => {
  let component: NgxInputSwitchComponent;
  let fixture: ComponentFixture<NgxInputSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInputSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
