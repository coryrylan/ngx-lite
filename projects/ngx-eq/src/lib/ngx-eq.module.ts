import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEqDirective } from './ngx-eq.directive';

export interface Config {
  extraSmall?: number;
  small?: number;
  medium?: number;
  large?: number;
  extraLarge?: number;
  disableForTesting?: boolean;
}

export const defaultConfig = {
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
  static forRoot(config = {}): ModuleWithProviders {
    return {
      ngModule: NgxEqModule,
      providers: [
        {
          provide: 'config',
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
