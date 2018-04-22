import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxInViewportDirective } from './ngx-in-viewport.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxInViewportDirective],
  exports: [NgxInViewportDirective]
})
export class NgxInViewportModule {}
