# ngx-eq

[![npm version](https://badge.fury.io/js/ngx-eq.svg)](https://badge.fury.io/js/ngx-eq)

NGX-EQ is an Angular Directive that makes it easier to allow
components to be responsive to their parent element size.
CSS Media Queries fall short when it comes to reusable components,
as they measure screen size and not the size context of the element.

NGX-EQ uses the Resize Observer API to efficiently add special
CSS class hooks to style your component based on the current
size of the component.

### [Demo](https://stackblitz.com/edit/angular-fgjuh8)

## Example

```html
<my-component ngxEQ></my-component
```

```css
:host {
  padding: 12px;
  margin-bottom: 12px;
  color: #fff;
  background-color: #4A4A4A;
  display: block;
}

:host.ngx-eq-sm {
  background-color: #FF353B;
}

:host.ngx-eq-md {
  background-color: #3F49E8;
}

:host.ngx-eq-lg {
  background-color: #48B04D;
}
  
:host.ngx-eq-xl {
  background-color: #E8BE0C;
}
```

## Instalation

`npm install ngx-eq --save`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEqModule } from 'ngx-eq';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxEqModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Configuration

The Element Query breakpoints can be customized.

```typescript
NgxEqModule.forRoot({
  // default values
  small: 480,
  medium: 720,
  large: 960,
  extraLarge: 1440
})
```