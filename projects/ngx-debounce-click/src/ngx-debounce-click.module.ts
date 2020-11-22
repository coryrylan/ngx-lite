import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDebounceClickDirective } from './ngx-debounce-click.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxDebounceClickDirective],
  exports: [NgxDebounceClickDirective],
})
export class NgxDebounceClickModule {}
