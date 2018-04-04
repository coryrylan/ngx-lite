import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { NgxInputTagModule } from './../../../lib/ngx-input-tag/ngx-input-tag.module';
import { NgxEqModule } from '../../../lib/ngx-eq/ngx-eq.module';

@NgModule({
  imports: [
    CommonModule,
    NgxInputTagModule.forRoot(), // { tagFormatter: (tag) => tag.toUpperCase() }
    NgxEqModule.forRoot(), // { disableForTesting: true }
  ],
  declarations: [],
  exports: [HttpClientModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
