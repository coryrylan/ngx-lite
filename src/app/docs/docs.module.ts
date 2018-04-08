import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../common/shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsNgxCodeExampleComponent } from './docs-ngx-code-example/docs-ngx-code-example.component';
import { DocsNgxInViewportComponent } from './docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxDebounceClickComponent } from './docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInputRangeComponent } from './docs-ngx-input-range/docs-ngx-input-range.component';
import { DocsNgxInputStarRatingComponent } from './docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxJsonLdComponent } from './docs-ngx-json-ld/docs-ngx-json-ld.component';
import { DocsNgxInputSwitchComponent } from './docs-ngx-input-switch/docs-ngx-input-switch.component';
import { DocsNgxInputTagComponent } from './docs-ngx-input-tag/docs-ngx-input-tag.component';
import { DocsNgxNavDrawerComponent } from './docs-ngx-nav-drawer/docs-ngx-nav-drawer.component';
import { DocsNgxLoadersComponent } from './docs-ngx-loaders/docs-ngx-loaders.component';
import { DocsNgxTabsComponent } from './docs-ngx-tabs/docs-ngx-tabs.component';
import { DocsNgxCarbonAdComponent } from './docs-ngx-carbon-ad/docs-ngx-carbon-ad.component';

@NgModule({
  imports: [
    SharedModule,
    DocsRoutingModule
  ],
  declarations: [
    DocsComponent,
    DocsHomeComponent,
    DocsNgxCodeExampleComponent,
    DocsNgxInViewportComponent,
    DocsNgxDebounceClickComponent,
    DocsNgxEqComponent,
    DocsNgxInputRangeComponent,
    DocsNgxInputStarRatingComponent,
    DocsNgxInputTagComponent,
    DocsNgxJsonLdComponent,
    DocsNgxInputSwitchComponent,
    DocsNgxNavDrawerComponent,
    DocsNgxLoadersComponent,
    DocsNgxTabsComponent,
    DocsNgxCarbonAdComponent,
  ]
})
export class DocsModule { }
