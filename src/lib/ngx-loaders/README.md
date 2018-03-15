# ngx-loaders

[![npm version](https://badge.fury.io/js/ngx-loaders.svg)](https://badge.fury.io/js/ngx-loaders)

Small lightweight loading indicator components.

## [Demo](https://stackblitz.com/edit/angular-i5c8wa)

## Installation

To install this library, run:

```bash
$ npm install ngx-loaders --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library module
import { NgxLoadersModule } from 'ngx-loaders';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Register module
    NgxLoadersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Component

Once the library is imported, you can use the `ngx-loaders` components.

## Template

```xml
<ngx-loading-spinner mini></ngx-loading-spinner>
<ngx-loading-spinner small></ngx-loading-spinner>
<ngx-loading-spinner></ngx-loading-spinner>
<ngx-loading-spinner light></ngx-loading-spinner>
<ngx-loading-bar></ngx-loading-bar>
```

## License

MIT © [Cory Rylan](https://coryrylan.com)
