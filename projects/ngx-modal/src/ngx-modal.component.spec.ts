import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxModalComponent } from './ngx-modal.component';

@Component({
  selector: 'ngx-test',
  template: `
    <ngx-modal [(visible)]="visible">
      <p>test content</p>
    </ngx-modal>

    <ngx-modal [(visible)]="visible" [templateRef]="template"></ngx-modal>
    <ng-template #template>
      <p>ng-template content test</p>
    </ng-template>
  `,
})
export class TestComponent {
  visible = false;
}

describe('NgxModalComponent', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let component: NgxModalComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxModalComponent, TestComponent],
      }).compileComponents();

      testFixture = TestBed.createComponent(TestComponent);
      component = testFixture.debugElement.query(
        By.directive(NgxModalComponent)
      ).componentInstance;
      testFixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide modal content by default', () => {
    expect(
      testFixture.nativeElement.querySelector('.ngx-modal-overlay.hidden')
    ).toBeTruthy();
    expect(testFixture.nativeElement.innerHTML).toContain('aria-hidden="true"');
  });

  it('should take a [visible] input', () => {
    testFixture.componentInstance.visible = true;
    testFixture.detectChanges();
    expect(component.visible).toBe(true);
  });

  it('should render modal content', () => {
    expect(
      testFixture.nativeElement.querySelector('.ngx-modal-overlay.hidden')
    ).toBeTruthy();

    testFixture.componentInstance.visible = true;
    testFixture.detectChanges();

    expect(
      testFixture.nativeElement.querySelector('.ngx-modal-overlay.hidden')
    ).toBeFalsy();
    expect(
      testFixture.nativeElement.querySelectorAll('.ngx-modal-overlay').length
    ).toBe(2);

    expect(testFixture.nativeElement.innerHTML).toContain('test content');
  });

  it('should render template content only when visible', () => {
    expect(testFixture.nativeElement.innerHTML).not.toContain(
      'ng-template content test'
    );

    testFixture.componentInstance.visible = true;
    testFixture.detectChanges();

    expect(testFixture.nativeElement.innerHTML).toContain(
      'ng-template content test'
    );
  });

  it('should have proper aria attributes when toggled', () => {
    expect(testFixture.nativeElement.innerHTML).toContain('aria-hidden="true"');

    testFixture.componentInstance.visible = true;
    testFixture.detectChanges();

    expect(testFixture.nativeElement.innerHTML).toContain(
      'aria-hidden="false"'
    );
  });
});
