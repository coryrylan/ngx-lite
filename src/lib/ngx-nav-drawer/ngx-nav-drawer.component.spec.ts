import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNavDrawerComponent } from './ngx-nav-drawer.component';

describe('NgxNavDrawerComponent', () => {
  let component: NgxNavDrawerComponent;
  let fixture: ComponentFixture<NgxNavDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNavDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
