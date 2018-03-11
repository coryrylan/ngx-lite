import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputSwitchComponent } from './ngx-input-switch.component';

@Component({
  template: `
    <ngx-input-switch formContolName="switch"></ngx-input-switch>
  `
})
class TestComponent {
  switch = new FormControl(true);
}

describe('NgxInputSwitchComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let switchEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TestComponent, NgxInputSwitchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    switchEl = fixture.nativeElement.querySelector('.switch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the appropriate boolean in a form', fakeAsync(() => {
    expect(component.switch.value).toBe(true);
    component.switch.setValue(false);
    expect(component.switch.value).toBe(false);
  }));
});
