import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMenuComponent } from './ngx-menu/ngx-menu.component';
import { NgxMenuService } from './ngx-menu/ngx-menu.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxMenuComponent],
  exports: [NgxMenuComponent],
  providers: [NgxMenuService]
})
export class NgxMenusModule {}
