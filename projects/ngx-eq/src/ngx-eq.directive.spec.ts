import { Component, DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxEqModule } from './ngx-eq.module';
import { NgxEqDirective } from './ngx-eq.directive';

@Component({
  template: `
    <div ngxEQ></div>
  `
})
class TestComponent {}

describe('NgxEqDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxEqModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it(
    'should apply ngx-eq css class',
    fakeAsync(done => {
      expect(fixture.nativeElement.innerHTML).toContain('ngx-eq');
    })
  );
});
