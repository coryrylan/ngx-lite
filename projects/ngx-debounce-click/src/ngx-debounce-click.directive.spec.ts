import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NgxDebounceClickDirective } from './ngx-debounce-click.directive';

@Component({
  template: ` <button ngxDebounceClick (debouncedClick)="add()"></button> `,
})
class TestComponent {
  count = 0;

  add() {
    this.count = this.count + 1;
    console.log('add()', this.count);
  }
}

describe('NgxDebounceClickDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let button: any;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxDebounceClickDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      button = fixture.nativeElement.querySelector('button');
    })
  );

  it('should debounce a click event', fakeAsync(() => {
    expect(component.count).toBe(0);
    button.click();
    expect(component.count).toBe(0);
    tick(1000);
    // fixture.detectChanges();
    // expect(component.count).toBe(1);
  }));
});
