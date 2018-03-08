import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-docs-ngx-input-star-rating',
  templateUrl: './docs-ngx-input-star-rating.component.html',
  styleUrls: ['./docs-ngx-input-star-rating.component.scss']
})
export class DocsNgxInputStarRatingComponent implements OnInit {
  form: FormGroup;
  value: Observable<number>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      rating: [3]
    });

    this.value = this.form.controls.rating.valueChanges;
  }

  submit() {
    console.log(this.form.value);
  }
}
