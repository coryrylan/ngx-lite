import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

const controls = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
};

@Component({
  selector: 'app-docs-ngx-modal',
  templateUrl: './docs-ngx-modal.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxModalComponent {
  showStandard = false;
  showLongContent = false;
  showTemplate = false;
  showForm = false;
  readonly modalForm: UntypedFormGroup;
  readonly controls = controls;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.modalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  submit() {
    console.log(this.modalForm.value);
    this.showForm = false;
  }
}
