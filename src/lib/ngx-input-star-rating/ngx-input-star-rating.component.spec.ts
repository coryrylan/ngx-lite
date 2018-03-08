import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputStarRatingComponent } from './ngx-input-star-rating.component';

describe('NgxInputRatingComponent', () => {
  let component: NgxInputStarRatingComponent;
  let fixture: ComponentFixture<NgxInputStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInputStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
