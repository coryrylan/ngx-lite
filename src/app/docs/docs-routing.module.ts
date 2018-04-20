import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsNgxCarbonAdComponent } from './docs-ngx-carbon-ad/docs-ngx-carbon-ad.component';
import { DocsNgxCodeExampleComponent } from './docs-ngx-code-example/docs-ngx-code-example.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsComponent } from './docs.component';
import { DocsNgxDebounceClickComponent } from './docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInViewportComponent } from './docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxInputDatepickerComponent } from './docs-ngx-input-datepicker/docs-ngx-input-datepicker.component';
import { DocsNgxInputRangeComponent } from './docs-ngx-input-range/docs-ngx-input-range.component';
import { DocsNgxInputStarRatingComponent } from './docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxInputTagComponent } from './docs-ngx-input-tag/docs-ngx-input-tag.component';
import { DocsNgxJsonLdComponent } from './docs-ngx-json-ld/docs-ngx-json-ld.component';
import { DocsNgxInputSwitchComponent } from './docs-ngx-input-switch/docs-ngx-input-switch.component';
import { DocsNgxLoadersComponent } from './docs-ngx-loaders/docs-ngx-loaders.component';
import { DocsNgxModalComponent } from './docs-ngx-modal/docs-ngx-modal.component';
import { DocsNgxNavDrawerComponent } from './docs-ngx-nav-drawer/docs-ngx-nav-drawer.component';
import { DocsNgxProgressComponent } from './docs-ngx-progress/docs-ngx-progress.component';
import { DocsNgxTabsComponent } from './docs-ngx-tabs/docs-ngx-tabs.component';

const routes: Routes = [
  {
    path: '', component: DocsComponent, children: [
      { path: '', component: DocsHomeComponent },
      { path: 'carbon-ad', component: DocsNgxCarbonAdComponent },
      { path: 'code-example', component: DocsNgxCodeExampleComponent },
      { path: 'debounce-click', component: DocsNgxDebounceClickComponent },
      { path: 'eq', component: DocsNgxEqComponent },
      { path: 'in-viewport', component: DocsNgxInViewportComponent },
      { path: 'input-datepicker', component: DocsNgxInputDatepickerComponent },
      { path: 'input-range', component: DocsNgxInputRangeComponent },
      { path: 'input-star-rating', component: DocsNgxInputStarRatingComponent },
      { path: 'input-switch', component: DocsNgxInputSwitchComponent },
      { path: 'input-tag', component: DocsNgxInputTagComponent },
      { path: 'json-ld', component: DocsNgxJsonLdComponent },
      { path: 'loaders', component: DocsNgxLoadersComponent },
      { path: 'modal', component: DocsNgxModalComponent },
      { path: 'nav-drawer', component: DocsNgxNavDrawerComponent },
      { path: 'tabs', component: DocsNgxTabsComponent },
      { path: 'progress', component: DocsNgxProgressComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
