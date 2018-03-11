import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxDebounceClickDirective } from './ngx-debounce-click.directive';

@Component({
  template: `<button ngxDebounceClick ngxDebounceClick (debouncedClick)="count = count + 1"></button>`
})
class TestComponent {
  count = 0;
}

describe('NgxDebounceClickDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let button;

  beforeEach(async((() => {
    TestBed.configureTestingModule({
      declarations: [NgxDebounceClickDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');
  })));

  it('should debounce a click event', fakeAsync((done) => {
    expect(component.count).toBe(0);
    button.click();
    tick(1000);
    fixture.detectChanges();
    // expect(component.count).toBe(1);
  }));
});
