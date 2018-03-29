import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxInputTagComponent, formatter as tagFormatter } from './ngx-input-tag.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxInputTagComponent],
  exports: [NgxInputTagComponent]
})
export class NgxInputTagModule {
  static forRoot(config = { tagFormatter }): ModuleWithProviders {
    return {
      ngModule: NgxInputTagModule,
      providers: [
        {
          provide: 'tagFormatter',
          useValue: config.tagFormatter
        }
      ]
    };
  }
}
