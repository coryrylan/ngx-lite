import { InjectionToken } from '@angular/core';

export type TagFormatter = (tag: string) => string;

export const NGX_INPUT_TAG_TAG_FORMATTER = new InjectionToken<TagFormatter>(
  'NGX_INPUT_TAG_TAG_FORMATTER'
);
