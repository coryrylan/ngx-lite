import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-timepicker',
  templateUrl: './docs-ngx-input-timepicker.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInputTimepickerComponent {
  form: FormGroup;
  value: Observable<Date>;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      date: [new Date()],
    });

    this.value = this.form.controls.date.valueChanges.pipe(
      startWith(new Date())
    );
  }

  submit() {
    console.log(this.form?.value);
    alert(this.form?.value.date);
  }
}
