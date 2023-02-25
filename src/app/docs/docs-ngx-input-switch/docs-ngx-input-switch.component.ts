import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-switch',
  templateUrl: './docs-ngx-input-switch.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInputSwitchComponent {
  form: FormGroup;
  value: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      switch: [true],
    });

    this.value = this.form.controls.switch.valueChanges.pipe(startWith(true));
  }

  submit() {
    console.log(this.form?.value);
    alert(this.form?.value.switch);
  }
}
