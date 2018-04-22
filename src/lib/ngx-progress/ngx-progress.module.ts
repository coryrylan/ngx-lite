import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProgressBarComponent } from './ngx-progress-bar/ngx-progress-bar.component';
import { NgxProgressCircleComponent } from './ngx-progress-circle/ngx-progress-circle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxProgressBarComponent, NgxProgressCircleComponent],
  exports: [NgxProgressBarComponent, NgxProgressCircleComponent]
})
export class NgxProgressModule {}
