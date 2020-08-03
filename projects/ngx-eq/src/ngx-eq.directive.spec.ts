import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { NgxEqModule } from './ngx-eq.module';

@Component({
  template: `
    <div ngxEQ></div>
  `
})
class TestComponent {}

describe('NgxEqDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxEqModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
  }));

  it('should apply ngx-eq css class', fakeAsync(() => {
    tick();
    expect(fixture.nativeElement.innerHTML).toContain('ngx-eq');
  }));
});
