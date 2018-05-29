import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMenuComponent } from './ngx-menu.component';

describe('NgxMenuComponent', () => {
  let component: NgxMenuComponent;
  let fixture: ComponentFixture<NgxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
