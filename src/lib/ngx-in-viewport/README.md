# ngx-in-viewport

A simple Angular Directive to easily determine if a element
in in the viewport.

## [Demo](https://stackblitz.com/edit/angular-ecokut)

## Installation

To install this library, run:

`npm install ngx-in-viewport --save`

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxInViewportModule } from 'ngx-in-viewport';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInViewportModule
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

@Component({
  selector: 'app-root',
  template: `
  <div ngxInViewport (inViewport)="log($event)">
    Hello World!
  </div>
  `
})
export class AppComponent {
  log(event) {
    console.log(event);
  }
}
```

## License

MIT © [Cory Rylan](https://coryrylan.com)