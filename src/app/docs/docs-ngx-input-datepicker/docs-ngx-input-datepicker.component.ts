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
  value: Observable<Date>;
  value2: Observable<Date>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const today = new Date();
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

    this.form = this.formBuilder.group({
      date: [today],
      date2: [[today, sevenDaysFromNow]]
    });

    this.value = this.form.controls.date.valueChanges.pipe(startWith(today));
    this.value2 = this.form.controls.date2.valueChanges.pipe(startWith(today));
  }

  submit() {
    console.log(this.form.value);
    alert(this.form.value.date);
  }
}
