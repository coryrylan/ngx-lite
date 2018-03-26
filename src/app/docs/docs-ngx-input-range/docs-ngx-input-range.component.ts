import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'app-docs-ngx-input-range',
  templateUrl: './docs-ngx-input-range.component.html',
  styleUrls: ['./docs-ngx-input-range.component.scss']
})
export class DocsNgxInputRangeComponent implements OnInit {
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
