import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-range',
  templateUrl: './docs-ngx-input-range.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInputRangeComponent {
  form: UntypedFormGroup;
  value: Observable<number>;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      distance: [75],
      condition: [1],
    });

    this.value = this.form.controls.distance.valueChanges.pipe(startWith(75));
  }

  submit() {
    console.log(this.form?.value);
    alert(this.form?.value.distance);
  }
}
