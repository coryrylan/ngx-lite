import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTabsComponent, NgxTabComponent } from './ngx-tabs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxTabsComponent, NgxTabComponent],
  exports: [NgxTabsComponent, NgxTabComponent]
})
export class NgxTabsModule {}
