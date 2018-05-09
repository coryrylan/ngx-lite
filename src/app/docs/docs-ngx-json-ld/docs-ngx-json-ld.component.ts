import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-ngx-json-ld',
  templateUrl: './docs-ngx-json-ld.component.html',
  preserveWhitespaces: true
})
export class DocsNgxJsonLdComponent implements OnInit {
  demoData = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url: 'http://www.example.com',
    name: 'Unlimited Ball Bearings Corp.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-401-555-1212',
      contactType: 'Customer service'
    }
  };

  json = {
    name: 'Cory',
    age: 26,
    test: '<script>alert(0)</script>'
  };

  constructor() {}

  ngOnInit() {}
}
