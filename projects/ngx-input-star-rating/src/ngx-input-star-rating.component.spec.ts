import { Component, DebugElement } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  waitForAsync,
  fakeAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NgxInputStarRatingComponent } from './ngx-input-star-rating.component';
import { By } from '@angular/platform-browser';
import { createGenericTestComponent } from 'projects/test/common';

@Component({
  template: '',
})
class TestComponent {
  form = new FormGroup({
    rating: new FormControl(0),
  });
  value = 0;
  rate = new FormControl(3);
  disabled = false;
}

const createTestComponent = (html: string) =>
  createGenericTestComponent(
    html,
    TestComponent
  ) as ComponentFixture<TestComponent>;

function triggerEventOnSpecificButton(
  fixture: ComponentFixture<TestComponent>,
  event: string,
  buttonIndex: number
) {
  const starButtonElements: DebugElement[] = fixture.debugElement.queryAll(
    By.css('.ngx-input-star-rating__btn')
  );
  starButtonElements[buttonIndex].triggerEventHandler(event, null);
  fixture.detectChanges();
}

function getRatings(fixture: ComponentFixture<TestComponent>) {
  return fixture.debugElement.queryAll(By.css('.ngx-input-star-rating__btn'));
}

function getFullStarRatings(fixture: ComponentFixture<TestComponent>) {
  return fixture.debugElement.queryAll(By.css('.ngx-input-star-rating__full'));
}

describe('NgxInputStarRatingComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TestComponent, NgxInputStarRatingComponent],
    }).compileComponents();
  }));

  it('should return the appropriate rating value in a form', fakeAsync(() => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating></ngx-input-star-rating>'
    );
    expect(fixture.componentInstance.rate.value).toBe(3);
    fixture.componentInstance.rate.setValue(5);
    expect(fixture.componentInstance.rate.value).toBe(5);
  }));

  it('should display 3 full stars on click', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating></ngx-input-star-rating>'
    );
    // Trigger click event on the 2nd star button
    triggerEventOnSpecificButton(fixture, 'click', 2);
    // Assert that the first 3 stars are highlighted
    expect(getFullStarRatings(fixture).length).toBe(3);

    // Trigger click event on the 5th star button
    triggerEventOnSpecificButton(fixture, 'click', 4);
    // Assert that the first 5 stars are highlighted
    expect(getFullStarRatings(fixture).length).toBe(5);
  });

  it('should highlight stars on mouse enter', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating></ngx-input-star-rating>'
    );
    triggerEventOnSpecificButton(fixture, 'mouseenter', 3);
    // Assert that the first 4 stars are highlighted
    expect(getFullStarRatings(fixture).length).toBe(4);

    // Trigger mouseenter event on the 2nd star button
    triggerEventOnSpecificButton(fixture, 'mouseenter', 1);
    // Assert that the first 2 stars are highlighted
    expect(getFullStarRatings(fixture).length).toBe(2);
  });

  it('should display the specified number of stars', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating [count]="10"></ngx-input-star-rating>'
    );
    expect(getRatings(fixture).length).toBe(10);
  });

  it('should display 5 stars by default', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating></ngx-input-star-rating>'
    );
    expect(getRatings(fixture).length).toEqual(5);
  });

  it('should disabled', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating [disabled]="disabled"></ngx-input-star-rating>'
    );
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    getRatings(fixture).forEach((starElement) => {
      expect(starElement.properties.disabled).toBe(true);
    });
  });

  it('should disabled using form control', () => {
    const html = `
        <form [formGroup]="form">
          <ngx-input-star-rating formControlName="rating"></ngx-input-star-rating>
        </form>`;

    const fixture = createTestComponent(html);
    fixture.componentInstance.form.get('rating')?.disable();
    fixture.detectChanges();
    const starElements = getRatings(fixture);
    starElements.forEach((starElement) => {
      expect(starElement.properties.disabled).toBe(true);
    });
  });

  it('should value 3', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating></ngx-input-star-rating>'
    );
    triggerEventOnSpecificButton(fixture, 'click', 2);
    expect(fixture.componentInstance.rate.value).toBe(3);
  });

  it('should display correct star ratings based on form control value', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating [formControl]="rate"></ngx-input-star-rating>'
    );
    fixture.componentInstance.rate.setValue(3.5);

    // Define test cases with input rating and expected star ratings
    const scenarios = [
      { rating: 3.5, expectedFullStars: 3, expectedHasHalfStar: true },
      { rating: 2.8, expectedFullStars: 2, expectedHasHalfStar: true },
      { rating: 4, expectedFullStars: 4, expectedHasHalfStar: false },
    ];

    // Iterate over the test cases and verify the star ratings
    for (const scenario of scenarios) {
      fixture.componentInstance.rate.setValue(scenario.rating);

      // Access the star elements on the screen
      const starElements = fixture.nativeElement.querySelectorAll(
        '.ngx-input-star-rating__btn'
      );

      // Count the number of full stars and check for the presence of a half star
      let fullStarsCount = 0;
      let hasHalfStar = false;

      for (const starElement of starElements) {
        if (starElement.querySelector('.ngx-input-star-rating__full')) {
          fullStarsCount++;
        } else if (starElement.querySelector('.ngx-input-star-rating__half')) {
          hasHalfStar = true;
        }
      }

      // Perform assertions
      expect(fullStarsCount).toBe(scenario.expectedFullStars);
      expect(hasHalfStar).toBe(scenario.expectedHasHalfStar);
    }
  });

  it('should validate and set stars within the specified limits', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating [formControl]="rate"></ngx-input-star-rating>'
    );
    fixture.componentInstance.rate.setValue(-1);
    fixture.detectChanges();
    expect(getFullStarRatings(fixture).length).toBe(0);

    fixture.componentInstance.rate.setValue(5);
    fixture.detectChanges();
    expect(getFullStarRatings(fixture).length).toBe(5);
  });

  it('should toggle the state from filled to empty on mouse leave', () => {
    const fixture = createTestComponent(
      '<ngx-input-star-rating [formControl]="rate"></ngx-input-star-rating>'
    );
    fixture.componentInstance.rate.setValue(0);

    const ratingButtons = getRatings(fixture);
    ratingButtons[3].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('.ngx-input-rating'));
    div.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.ngx-input-star-rating__full'))
    ).toBeFalsy();

    fixture.componentInstance.rate.setValue(2);
    getRatings(fixture)[4].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(getFullStarRatings(fixture).length).toBe(5);

    div.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(getFullStarRatings(fixture).length).toBe(2);
  });
});
