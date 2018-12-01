import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEqDirective } from './ngx-eq.directive';
import { Config, NGX_EQ_CONFIG } from './ngx-eq.di-tokens';

export const defaultConfig: Config = {
  extraSmall: 280,
  small: 480,
  medium: 720,
  large: 960,
  extraLarge: 1440,
  disableForTesting: false // for unit testing in karma
};

@NgModule({
  imports: [CommonModule],
  declarations: [NgxEqDirective],
  exports: [NgxEqDirective]
})
export class NgxEqModule {
  static forRoot(config: Config = {}): ModuleWithProviders {
    return {
      ngModule: NgxEqModule,
      providers: [
        {
          provide: NGX_EQ_CONFIG,
          // inline config, otherwise they get treeshaken out when they shouldnt
          useValue: {
            extraSmall: 280,
            small: 480,
            medium: 720,
            large: 960,
            extraLarge: 1440,
            disableForTesting: false,
            ...config
          }
        }
      ]
    };
  }
}
