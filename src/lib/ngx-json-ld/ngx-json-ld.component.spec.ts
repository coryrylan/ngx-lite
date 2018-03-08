import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonLdComponent } from './ngx-json-ld.component';
import { SimpleChange } from '@angular/core';

const testSchema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  'url': 'http://www.example.com',
  'name': 'Unlimited Ball Bearings Corp.',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+1-401-555-1212',
    'contactType': 'Customer service'
  },
  'scriptTest': '<script>window.scriptInjection = true</script>'
};


describe('NgxJsonLdComponent', () => {
  let component: NgxJsonLdComponent;
  let fixture: ComponentFixture<NgxJsonLdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxJsonLdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonLdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create schema in the template', () => {
    component.json = testSchema;
    component.ngOnChanges({ json: new SimpleChange(null, component.json, false) });
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('http://schema.org');
  });

  it('should prevent script injection', () => {
    component.json = testSchema;
    component.ngOnChanges({ json: new SimpleChange(null, component.json, false) });
    fixture.detectChanges();
    expect((window as any).scriptInjection).toBe(undefined);
  });
});
