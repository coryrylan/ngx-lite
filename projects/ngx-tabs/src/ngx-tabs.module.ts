import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NgxTabsComponent,
  NgxTabComponent,
  NgxTabRoutesComponent,
} from './ngx-tabs.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NgxTabsComponent, NgxTabComponent, NgxTabRoutesComponent],
  exports: [NgxTabsComponent, NgxTabComponent, NgxTabRoutesComponent],
})
export class NgxTabsModule {}
