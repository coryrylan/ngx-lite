import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-datepicker',
  templateUrl: './docs-ngx-input-datepicker.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInputDatepickerComponent {
  form: UntypedFormGroup;
  value: Observable<[Date, Date]>;
  value2: Observable<Date>;
  minDate: Date;
  maxDate: Date;

  constructor(private formBuilder: UntypedFormBuilder) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const later = new Date();
    later.setDate(today.getDate() + 5);

    this.minDate = new Date();
    this.minDate.setDate(today.getDate());
    this.maxDate = new Date();
    this.maxDate.setDate(today.getDate() + 20);

    const rangeValue: [Date, Date] = [tomorrow, later];

    this.form = this.formBuilder.group({
      date: [rangeValue],
      date2: [today],
    });

    this.value = this.form.controls.date.valueChanges.pipe(
      startWith(rangeValue)
    );
    this.value2 = this.form.controls.date2.valueChanges.pipe(startWith(today));
  }

  submit() {
    console.log(this.form?.value);
    alert(this.form?.value.date);
  }
}
