import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxInputRangeComponent } from './ngx-input-range.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgxInputRangeComponent
  ],
  exports: [
    NgxInputRangeComponent
  ]
})
export class NgxInputRangeModule { }
