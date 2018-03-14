import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DocsNgxDebounceClickComponent } from './docs/docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs/docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInViewportComponent } from './docs/docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxInputStarRatingComponent } from './docs/docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxInputTagComponent } from './docs/docs-ngx-input-tag/docs-ngx-input-tag.component';
import { DocsNgxJsonLdComponent } from './docs/docs-ngx-json-ld/docs-ngx-json-ld.component';
import { DocsNgxInputSwitchComponent } from './docs/docs-ngx-input-switch/docs-ngx-input-switch.component';
import { DocsNgxNavDrawerComponent } from './docs/docs-ngx-nav-drawer/docs-ngx-nav-drawer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs/ngx-debounce-click', component: DocsNgxDebounceClickComponent },
  { path: 'docs/ngx-eq', component: DocsNgxEqComponent },
  { path: 'docs/ngx-in-viewport', component: DocsNgxInViewportComponent },
  { path: 'docs/ngx-input-star-rating', component: DocsNgxInputStarRatingComponent },
  { path: 'docs/ngx-input-switch', component: DocsNgxInputSwitchComponent },
  { path: 'docs/ngx-input-tag', component: DocsNgxInputTagComponent },
  { path: 'docs/ngx-json-ld', component: DocsNgxJsonLdComponent },
  { path: 'docs/ngx-nav-drawer', component: DocsNgxNavDrawerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
