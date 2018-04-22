import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-ngx-in-viewport',
  templateUrl: './docs-ngx-in-viewport.component.html'
})
export class DocsNgxInViewportComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit() {}

  log(event) {
    this.count++;
    console.log(event);
  }
}
