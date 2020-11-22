import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-ngx-input-star-rating',
  templateUrl: './docs-ngx-input-star-rating.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInputStarRatingComponent {
  form: FormGroup;
  value: Observable<number>;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      rating: [3.5],
    });

    this.value = this.form.controls.rating.valueChanges.pipe(startWith(3.5));
  }

  submit() {
    console.log(this.form?.value);
    alert(this.form?.value.rating);
  }
}
