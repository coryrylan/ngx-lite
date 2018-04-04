import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-switch',
  templateUrl: './docs-ngx-input-switch.component.html'
})
export class DocsNgxInputSwitchComponent implements OnInit {
  form: FormGroup;
  value: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      switch: [true]
    });

    this.value = this.form.controls.switch.valueChanges.pipe(startWith(true));
  }

  submit() {
    console.log(this.form.value);
  }
}
