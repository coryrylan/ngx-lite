# ngx-nav-drawer

[![npm version](https://badge.fury.io/js/ngx-nav-drawer.svg)](https://badge.fury.io/js/ngx-nav-drawer)

A small component for simple navigation drawers.

## [Demo](https://stackblitz.com/edit/angular-veeywy)

## Installation

To install this library, run:

`npm install ngx-nav-drawer --save`

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxNavDrawerModule } from 'ngx-nav-drawer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxNavDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Component

Once the library is imported, you can use the `ngx-input-switch` component.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>ngx-nav-drawer</h1>

<ngx-nav-drawer [(open)]="show">
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</ngx-nav-drawer>
  `
})
export class AppComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit() { }
}
```

## License

MIT © [Cory Rylan](https://coryrylan.com)