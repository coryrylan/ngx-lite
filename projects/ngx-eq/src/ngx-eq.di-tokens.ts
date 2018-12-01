import { InjectionToken } from '@angular/core';

export interface Config {
  extraSmall?: number;
  small?: number;
  medium?: number;
  large?: number;
  extraLarge?: number;
  disableForTesting?: boolean;
}

export const NGX_EQ_CONFIG = new InjectionToken<Config>('NGX_EQ_CONFIG');
