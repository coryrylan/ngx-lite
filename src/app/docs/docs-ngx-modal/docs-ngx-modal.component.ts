import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const controls = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
};

@Component({
  selector: 'app-docs-ngx-modal',
  templateUrl: './docs-ngx-modal.component.html',
  preserveWhitespaces: true
})
export class DocsNgxModalComponent implements OnInit {
  showStandard = false;
  showLongContent = false;
  showTemplate = false;
  showForm = false;
  readonly modalForm: FormGroup;
  readonly controls = controls;

  constructor(private formBuilder: FormBuilder) {
    this.modalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  ngOnInit() {}

  submit() {
    console.log(this.modalForm.value);
    this.showForm = false;
  }
}
