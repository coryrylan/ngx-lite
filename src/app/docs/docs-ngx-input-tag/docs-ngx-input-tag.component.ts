import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

const tags = ['nasa', 'spacex', 'tesla'];
const tagSuggestions = ['google', 'apple', 'microsoft'];

@Component({
  selector: 'app-docs-ngx-input-tag',
  templateUrl: './docs-ngx-input-tag.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxInputTagComponent {
  form: UntypedFormGroup;
  value: Observable<string[]>;
  tagSuggestions = tagSuggestions;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      tags: [tags],
    });

    this.value = this.form.controls.tags.valueChanges.pipe(startWith(tags));
  }

  submit() {
    console.log(this.form?.value);
    alert(this.form?.value.tags);
  }
}
