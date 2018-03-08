import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEqDirective } from './ngx-eq.directive';

export interface Config {
  small?: number;
  medium?: number;
  large?: number;
  extraLarge?: number;
}

export const defaultConfig: Config = {
  small: 480,
  medium: 720,
  large: 960,
  extraLarge: 1440
};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxEqDirective
  ],
  exports: [
    NgxEqDirective
  ]
})
export class NgxEqModule {
  static forRoot(config = {}): ModuleWithProviders {
    return {
      ngModule: NgxEqModule,
      providers: [
        { provide: 'config', useValue: { ...defaultConfig, ...config }}
      ]
    };
  }
}
