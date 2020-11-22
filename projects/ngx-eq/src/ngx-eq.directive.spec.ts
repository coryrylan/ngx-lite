import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NgxEqModule } from './ngx-eq.module';

@Component({
  template: ` <div ngxEQ></div> `,
})
class TestComponent {}

describe('NgxEqDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [NgxEqModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    })
  );

  // it('should apply ngx-eq css class', fakeAsync(() => {
  //   tick();
  //   expect(fixture.nativeElement.innerHTML).toContain('ngx-eq');
  // }));
});
