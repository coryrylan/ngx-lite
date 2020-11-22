import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-ngx-in-viewport',
  templateUrl: './docs-ngx-in-viewport.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInViewportComponent {
  count = 0;

  log(event: any) {
    this.count++;
    console.log(event);
  }
}
