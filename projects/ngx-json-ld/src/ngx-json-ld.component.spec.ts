import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonLdComponent } from './ngx-json-ld.component';
import { SimpleChange } from '@angular/core';

const testSchema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  url: 'http://www.example.com',
  name: 'Unlimited Ball Bearings Corp.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-401-555-1212',
    contactType: 'Customer service'
  },
  scriptTest: '<script>window.scriptInjection = true</script>'
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
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('http://schema.org');
  });

  it('should update schema in template', () => {
    const initialName = testSchema.name;
    const predictedName = 'Unlimited Ball Bearings Corp.';

    component.json = testSchema;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain(initialName);

    testSchema.name = predictedName;
    component.json = testSchema;
    expect(fixture.nativeElement.innerHTML).toContain(predictedName);
  });

  it('should prevent script injection', () => {
    component.json = testSchema;
    fixture.detectChanges();
    expect((window as any).scriptInjection).toBe(undefined);
  });
});
