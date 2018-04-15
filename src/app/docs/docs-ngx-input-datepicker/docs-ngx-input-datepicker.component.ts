import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-datepicker',
  templateUrl: './docs-ngx-input-datepicker.component.html'
})
export class DocsNgxInputDatepickerComponent implements OnInit {
  form: FormGroup;
  value: Observable<[Date, Date]>;
  value2: Observable<Date>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const today = new Date();
    const later = new Date();
    const range: [Date, Date] = [today, later];

    later.setDate(later.getDate() + 5);

    this.form = this.formBuilder.group({
      date: [range],
      date2: [today]
    });

    this.value = this.form.controls.date.valueChanges.pipe(startWith(range));
    this.value2 = this.form.controls.date2.valueChanges.pipe(startWith(today));
  }

  submit() {
    console.log(this.form.value);
    alert(this.form.value.date);
  }
}
