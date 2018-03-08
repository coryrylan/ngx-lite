# NGX-DEBOUNCE-CLICK

A simple Angular Directive to easily debounce click events.

## [Demo](https://stackblitz.com/edit/angular-nbhugm)

## Installation

To install this library, run:

`npm install ngx-debounce-click --save`

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDebounceClickModule } from 'ngx-debounce-click';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDebounceClickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Component

Once the library is imported, you can use the `ngx-debounce-click` directive.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <h1>NGX-DEBOUNCE-CLICK</h1>

    {{count}}

    <button (click)="count = count + 1">Regular Click</button>

    <button ngxDebounceClick (debouncedClick)="count = count + 1">Debounced Click</button>
  `
})
export class AppComponent {
  count = 0;
}
```

## License

MIT © [Cory Rylan](https://coryrylan.com)