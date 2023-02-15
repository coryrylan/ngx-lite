import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMenuComponent } from './ngx-menu.component';
import { NgxMenuService } from './ngx-menu.service';

describe('NgxMenuComponent', () => {
  let component: NgxMenuComponent;
  let fixture: ComponentFixture<NgxMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMenuComponent],
      providers: [NgxMenuService],
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
