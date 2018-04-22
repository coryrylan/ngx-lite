import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCodeExampleComponent } from './ngx-code-example.component';

@Component({
  template: `
    <ngx-code-example>
      <![CDATA[
if (someCondition) {
  console.log('hi');
} else {
  console.log('bye');
}
      ]]>
    </ngx-code-example>
  `
})
class TestComponent { }

describe('NgxCodeExampleComponent', () => {
  let component: NgxCodeExampleComponent;
  let fixture: ComponentFixture<NgxCodeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxCodeExampleComponent, TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCodeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a code example', () => {
    expect(fixture.nativeElement.innerHTML).toContain('language-javascript');
  });
});
