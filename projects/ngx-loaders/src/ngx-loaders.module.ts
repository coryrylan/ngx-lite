import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxLoadingSpinnerComponent } from './ngx-loading-spinner/ngx-loading-spinner.component';
import { NgxLoadingBarComponent } from './ngx-loading-bar/ngx-loading-bar.component';

const components = [NgxLoadingSpinnerComponent, NgxLoadingBarComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})
export class NgxLoadersModule {}
