import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'app-docs-ngx-input-range',
  templateUrl: './docs-ngx-input-range.component.html',
  preserveWhitespaces: true
})
export class DocsNgxInputRangeComponent implements OnInit {
  form: FormGroup;
  value: Observable<number>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      distance: [75],
      condition: [1]
    });

    this.value = this.form.controls.distance.valueChanges.pipe(startWith(75));
  }

  submit() {
    console.log(this.form.value);
    alert(this.form.value.distance);
  }
}
