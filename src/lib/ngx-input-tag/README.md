# ngx-input-switch

[![npm version](https://badge.fury.io/js/ngx-input-tag.svg)](https://badge.fury.io/js/ngx-input-tag)

A simple tag input component compatible with both Angular Reactive Forms and Template Forms.

## [Demo](https://stackblitz.com/edit/angular-8qhlb4)

## Installation

To install this library, run:

`npm install ngx-input-tag --save`

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxInputTagModule } from 'ngx-input-tag';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxInputTagModule.forRoot()
    // A optional custom tag formatter can be configured
    // NgxInputTagModule.forRoot({ tagFormatter: (tag) => tag.toUpperCase() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Component

Once the library is imported, you can use the `ngx-input-tag` component.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
<h1>ngx-input-tag</h1>

<form [formGroup]="form" (ngSubmit)="submit()">
  <ngx-input-tag formControlName="tags" [tagSuggestions]="tagSuggestions"></ngx-input-tag>
  <button>Submit</button>
</form>
  `
})
export class AppComponent implements OnInit {
  form: FormGroup;
  value: Observable<number>;
  tagSuggestions = ['google', 'apple', 'microsoft'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      tags: [['dog', 'cat', 'bird']]
    });

    this.value = this.form.controls.tags.valueChanges;
  }

  submit() {
    console.log(this.form.value);
  }
}
```

## License

MIT © [Cory Rylan](https://coryrylan.com)