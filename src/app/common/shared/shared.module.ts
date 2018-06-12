import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxCarbonAdModule } from '@ngx-lite/carbon-ad';
import { NgxCodeExampleModule } from '@ngx-lite/code-example';
import { NgxDebounceClickModule } from '@ngx-lite/debounce-click';
import { NgxEqModule } from '@ngx-lite/eq';
import { NgxInViewportModule } from '@ngx-lite/in-viewport';
import { NgxInputDatepickerModule } from '@ngx-lite/input-datepicker';
import { NgxInputRangeModule } from '@ngx-lite/input-range';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { NgxInputSwitchModule } from '@ngx-lite/input-switch';
import { NgxLoadersModule } from '@ngx-lite/loaders';
import { NgxInputTagModule } from '@ngx-lite/input-tag';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { NgxModalModule } from '@ngx-lite/modal';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';
import { NgxProgressModule } from '@ngx-lite/progress';
import { NgxTabsModule } from '@ngx-lite/tabs';
import { NgxMenusModule } from '@ngx-lite/menus';
import { BadgesComponent } from './badges/badges.component';

const components = [BadgesComponent];

const modules = [
  NgxCarbonAdModule,
  NgxCodeExampleModule,
  NgxDebounceClickModule,
  NgxEqModule,
  NgxInViewportModule,
  NgxInputDatepickerModule,
  NgxInputRangeModule,
  NgxInputStarRatingModule,
  NgxInputSwitchModule,
  NgxInputTagModule,
  NgxLoadersModule,
  NgxJsonLdModule,
  NgxModalModule,
  NgxNavDrawerModule,
  NgxTabsModule,
  NgxProgressModule,
  NgxMenusModule
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...modules],
  exports: [CommonModule, ReactiveFormsModule, ...modules, ...components],
  declarations: [BadgesComponent]
})
export class SharedModule {}
