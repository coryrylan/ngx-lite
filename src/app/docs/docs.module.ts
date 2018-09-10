import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../common/shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsNgxCodeExampleComponent } from './docs-ngx-code-example/docs-ngx-code-example.component';
import { DocsNgxInViewportComponent } from './docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxInputDatepickerComponent } from './docs-ngx-input-datepicker/docs-ngx-input-datepicker.component';
import { DocsNgxInputTimepickerComponent } from './docs-ngx-input-timepicker/docs-ngx-input-timepicker.component';
import { DocsNgxDebounceClickComponent } from './docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInputRangeComponent } from './docs-ngx-input-range/docs-ngx-input-range.component';
import { DocsNgxInputStarRatingComponent } from './docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxJsonLdComponent } from './docs-ngx-json-ld/docs-ngx-json-ld.component';
import { DocsNgxInputSwitchComponent } from './docs-ngx-input-switch/docs-ngx-input-switch.component';
import { DocsNgxInputTagComponent } from './docs-ngx-input-tag/docs-ngx-input-tag.component';
import { DocsNgxModalComponent } from './docs-ngx-modal/docs-ngx-modal.component';
import { DocsNgxNavDrawerComponent } from './docs-ngx-nav-drawer/docs-ngx-nav-drawer.component';
import { DocsNgxLoadersComponent } from './docs-ngx-loaders/docs-ngx-loaders.component';
import {
  DocsNgxTabsComponent,
  DocsNgxTabRoutes1Component,
  DocsNgxTabRoutes2Component
} from './docs-ngx-tabs/docs-ngx-tabs.component';
import { DocsNgxCarbonAdComponent } from './docs-ngx-carbon-ad/docs-ngx-carbon-ad.component';
import { DocsNgxProgressComponent } from './docs-ngx-progress/docs-ngx-progress.component';
import { DocsNgxMenuComponent } from './docs-ngx-menu/docs-ngx-menu.component';

@NgModule({
  imports: [SharedModule, DocsRoutingModule],
  declarations: [
    DocsComponent,
    DocsHomeComponent,
    DocsNgxCodeExampleComponent,
    DocsNgxDebounceClickComponent,
    DocsNgxEqComponent,
    DocsNgxInViewportComponent,
    DocsNgxInputDatepickerComponent,
    DocsNgxInputTimepickerComponent,
    DocsNgxInputRangeComponent,
    DocsNgxInputStarRatingComponent,
    DocsNgxInputTagComponent,
    DocsNgxJsonLdComponent,
    DocsNgxInputSwitchComponent,
    DocsNgxModalComponent,
    DocsNgxNavDrawerComponent,
    DocsNgxLoadersComponent,
    DocsNgxTabsComponent,
    DocsNgxTabRoutes1Component,
    DocsNgxTabRoutes2Component,
    DocsNgxCarbonAdComponent,
    DocsNgxProgressComponent,
    DocsNgxMenuComponent
  ]
})
export class DocsModule {}
