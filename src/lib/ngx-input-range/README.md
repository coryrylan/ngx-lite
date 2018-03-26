# ngx-input-range

[![npm version](https://badge.fury.io/js/ngx-input-range.svg)](https://badge.fury.io/js/ngx-input-range)

A small range input component with label support.

## [Demo](https://stackblitz.com/edit/angular-m8nwd6)

## Installation

To install this library, run:

`npm install ngx-input-range --save`

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxInputRangeModule } from 'ngx-input-range';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxInputRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Component

Once the library is imported, you can use the `ngx-input-range` component.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
<a href="https://github.com/coryrylan/ngx-libraries">
  <h1>ngx-input-range</h1>
</a>

<form [formGroup]="form" (ngSubmit)="submit()">
  <ngx-input-range label="distance" formControlName="distance"></ngx-input-range>
  <ngx-input-range  label="condition" [min]="0" [max]="3" [step]="1" [labels]="['Poor', 'Fair', 'Good', 'Excellent']"></ngx-input-range>
  <button>Submit</button>
</form>

<p>
  {{value | async}}
</p>
  `
})
export class AppComponent implements OnInit {
  form: FormGroup;
  value: Observable<number>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      distance: [75],
      condition: [2]
    });

    this.value = this.form.controls.distance.valueChanges.pipe(startWith(75));
  }

  submit() {
    console.log(this.form.value);
  }
}
```

## License

MIT © [Cory Rylan](https://coryrylan.com)