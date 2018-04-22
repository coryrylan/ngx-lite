import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';

const tags = ['nasa', 'spacex', 'tesla'];
const tagSuggestions = ['google', 'apple', 'microsoft'];

@Component({
  selector: 'app-docs-ngx-input-tag',
  templateUrl: './docs-ngx-input-tag.component.html'
})
export class DocsNgxInputTagComponent implements OnInit {
  form: FormGroup;
  value: Observable<string[]>;
  tagSuggestions = tagSuggestions;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      tags: [tags]
    });

    this.value = this.form.controls.tags.valueChanges.pipe(startWith(tags));
  }

  submit() {
    console.log(this.form.value);
    alert(this.form.value.tags);
  }
}
