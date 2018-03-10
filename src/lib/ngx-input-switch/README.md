# ngx-input-switch

## [Demo](https://stackblitz.com/edit/angular-vow9um)

## Installation

To install this library, run:

`npm install ngx-input-switch --save`

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxInputSwitchModule } from 'ngx-input-switch';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxInputSwitchModule
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
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
<h1>ngx-input-switch</h1>

<form [formGroup]="form" (ngSubmit)="submit()">
  <ngx-input-switch formControlName="switch"></ngx-input-switch>
  <button>Submit</button>
</form>
  `
})
export class AppComponent implements OnInit {
  form: FormGroup;
  value: Observable<number>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      switch: [true]
    });

    this.value = this.form.controls.switch.valueChanges;
  }

  submit() {
    console.log(this.form.value);
  }
}
```

## License

MIT © [Cory Rylan](https://coryrylan.com)