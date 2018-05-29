import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMenuComponent } from './ngx-menu/ngx-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxMenuComponent],
  exports: [NgxMenuComponent]
})
export class NgxMenusModule {}
