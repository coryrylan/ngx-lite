import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-docs-ngx-progress',
  templateUrl: './docs-ngx-progress.component.html'
})
export class DocsNgxProgressComponent {
  readonly process: Observable<number>;
  constructor() {
    this.process = emulateProcess();
  }
}

function emulateProcess() {
  return new Observable<number>(observer => {
    let val = 0;
    const interval = setInterval(() => {
      if (val < 100) {
        val++;
      } else {
        val = 0;
      }

      observer.next(val);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });
}
