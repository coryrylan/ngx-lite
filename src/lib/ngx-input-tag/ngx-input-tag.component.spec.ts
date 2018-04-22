import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';

import { NgxInputTagComponent, formatter } from './ngx-input-tag.component';

const testData = ['dog', 'cat', 'bird'];

@Component({
  template: `
    <ngx-input-tag formContolName="tags"></ngx-input-tag>
  `
})
class TestComponent {
  tags = new FormControl(testData);
}

describe('NgxInputTagComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxInputTagComponent],
      providers: [
        {
          provide: 'tagFormatter',
          useValue: formatter
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should return the appropriate list of tags in a form',
    fakeAsync(() => {
      expect(component.tags.value).toBe(testData);
      component.tags.setValue([]);
      expect(component.tags.value.length).toBe(0);
    })
  );
});
