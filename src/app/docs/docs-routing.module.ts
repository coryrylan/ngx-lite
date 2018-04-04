import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsNgxCodeExampleComponent } from './docs-ngx-code-example/docs-ngx-code-example.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsComponent } from './docs.component';
import { DocsNgxDebounceClickComponent } from './docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInViewportComponent } from './docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxInputRangeComponent } from './docs-ngx-input-range/docs-ngx-input-range.component';
import { DocsNgxInputStarRatingComponent } from './docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxInputTagComponent } from './docs-ngx-input-tag/docs-ngx-input-tag.component';
import { DocsNgxJsonLdComponent } from './docs-ngx-json-ld/docs-ngx-json-ld.component';
import { DocsNgxInputSwitchComponent } from './docs-ngx-input-switch/docs-ngx-input-switch.component';
import { DocsNgxLoadersComponent } from './docs-ngx-loaders/docs-ngx-loaders.component';
import { DocsNgxNavDrawerComponent } from './docs-ngx-nav-drawer/docs-ngx-nav-drawer.component';

const routes: Routes = [
  {
    path: '', component: DocsComponent, children: [
      { path: '', component: DocsHomeComponent },
      { path: 'ngx-code-example', component: DocsNgxCodeExampleComponent },
      { path: 'ngx-debounce-click', component: DocsNgxDebounceClickComponent },
      { path: 'ngx-eq', component: DocsNgxEqComponent },
      { path: 'ngx-in-viewport', component: DocsNgxInViewportComponent },
      { path: 'ngx-input-range', component: DocsNgxInputRangeComponent },
      { path: 'ngx-input-star-rating', component: DocsNgxInputStarRatingComponent },
      { path: 'ngx-input-switch', component: DocsNgxInputSwitchComponent },
      { path: 'ngx-input-tag', component: DocsNgxInputTagComponent },
      { path: 'ngx-json-ld', component: DocsNgxJsonLdComponent },
      { path: 'ngx-loaders', component: DocsNgxLoadersComponent },
      { path: 'ngx-nav-drawer', component: DocsNgxNavDrawerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
