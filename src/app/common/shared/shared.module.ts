import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxCarbonAdModule } from './../../../lib/ngx-carbon-ad/ngx-carbon-ad.module';
import { NgxCodeExampleModule } from './../../../lib/ngx-code-example/ngx-code-example.module';
import { NgxDebounceClickModule } from './../../../lib/ngx-debounce-click/ngx-debounce-click.module';
import { NgxEqModule } from './../../../lib/ngx-eq/ngx-eq.module';
import { NgxInViewportModule } from './../../../lib/ngx-in-viewport/ngx-in-viewport.module';
import { NgxInputDatepickerModule } from './../../../lib/ngx-input-datepicker/ngx-input-datepicker.module';
import { NgxInputRangeModule } from './../../../lib/ngx-input-range/ngx-input-range.module';
import { NgxInputStarRatingModule } from './../../../lib/ngx-input-star-rating/ngx-input-star-rating.module';
import { NgxInputSwitchModule } from './../../../lib/ngx-input-switch/ngx-input-switch.module';
import { NgxLoadersModule } from './../../../lib/ngx-loaders/ngx-loaders.module';
import { NgxInputTagModule } from './../../../lib/ngx-input-tag/ngx-input-tag.module';
import { NgxJsonLdModule } from './../../../lib/ngx-json-ld/ngx-json-ld.module';
import { NgxModalModule } from './../../../lib/ngx-modal/ngx-modal.module';
import { NgxNavDrawerModule } from './../../../lib/ngx-nav-drawer/ngx-nav-drawer.module';
import { NgxTabsModule } from './../../../lib/ngx-tabs/ngx-tabs.module';
import { NgxProgressModule } from './../../../lib/ngx-progress/ngx-progress.module';
import { BadgesComponent } from './badges/badges.component';

const components = [
  BadgesComponent
];

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
  NgxProgressModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...modules
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ...modules,
    ...components
  ],
  declarations: [BadgesComponent]
})
export class SharedModule { }
