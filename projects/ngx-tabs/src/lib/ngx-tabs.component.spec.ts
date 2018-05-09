import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabsComponent } from './ngx-tabs.component';

describe('NgxTabsComponent', () => {
  let component: NgxTabsComponent;
  let fixture: ComponentFixture<NgxTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
