import { Component } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import {
  waitForAsync,
  fakeAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NgxInputStarRatingComponent } from './ngx-input-star-rating.component';

@Component({
  template: `
    <ngx-input-star-rating formContolName="rate"></ngx-input-star-rating>
  `,
})
class TestComponent {
  rate = new UntypedFormControl(3);
}

describe('NgxInputStarRatingComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let switchEl;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [TestComponent, NgxInputStarRatingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    switchEl = fixture.nativeElement.querySelector('.input-rating');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the appropriate rating value in a form', fakeAsync(() => {
    expect(component.rate.value).toBe(3);
    component.rate.setValue(5);
    expect(component.rate.value).toBe(5);
  }));
});
