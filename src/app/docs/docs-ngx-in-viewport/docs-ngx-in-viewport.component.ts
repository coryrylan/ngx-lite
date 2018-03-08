import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-ngx-in-viewport',
  templateUrl: './docs-ngx-in-viewport.component.html',
  styleUrls: ['./docs-ngx-in-viewport.component.scss']
})
export class DocsNgxInViewportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(event) {
    console.log(event);
  }
}
