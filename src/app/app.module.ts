import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgxCodeExampleModule } from './../lib/ngx-code-example/ngx-code-example.module';
import { NgxDebounceClickModule } from './../lib/ngx-debounce-click/ngx-debounce-click.module';
import { NgxEqModule } from './../lib/ngx-eq/ngx-eq.module';
import { NgxInViewportModule } from './../lib/ngx-in-viewport/ngx-in-viewport.module';
import { NgxInputRangeModule } from './../lib/ngx-input-range/ngx-input-range.module';
import { NgxInputStarRatingModule } from './../lib/ngx-input-star-rating/ngx-input-star-rating.module';
import { NgxInputSwitchModule } from './../lib/ngx-input-switch/ngx-input-switch.module';
import { NgxLoadersModule } from './../lib/ngx-loaders/ngx-loaders.module';
import { NgxInputTagModule } from './../lib/ngx-input-tag/ngx-input-tag.module';
import { NgxJsonLdModule } from './../lib/ngx-json-ld/ngx-json-ld.module';
import { NgxNavDrawerModule } from './../lib/ngx-nav-drawer/ngx-nav-drawer.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocsNgxCodeExampleComponent } from './docs/docs-ngx-code-example/docs-ngx-code-example.component';
import { DocsNgxInViewportComponent } from './docs/docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxDebounceClickComponent } from './docs/docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs/docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInputRangeComponent } from './docs/docs-ngx-input-range/docs-ngx-input-range.component';
import { DocsNgxInputStarRatingComponent } from './docs/docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxJsonLdComponent } from './docs/docs-ngx-json-ld/docs-ngx-json-ld.component';
import { DocsNgxInputSwitchComponent } from './docs/docs-ngx-input-switch/docs-ngx-input-switch.component';
import { DocsNgxInputTagComponent } from './docs/docs-ngx-input-tag/docs-ngx-input-tag.component';
import { DocsNgxNavDrawerComponent } from './docs/docs-ngx-nav-drawer/docs-ngx-nav-drawer.component';
import { DocsNgxLoadersComponent } from './docs/docs-ngx-loaders/docs-ngx-loaders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxCodeExampleModule,
    NgxDebounceClickModule,
    NgxEqModule.forRoot(), // { disableForTesting: true }
    NgxInViewportModule,
    NgxInputRangeModule,
    NgxInputStarRatingModule,
    NgxInputSwitchModule,
    NgxInputTagModule.forRoot(), // { tagFormatter: (tag) => tag.toUpperCase() }
    NgxLoadersModule,
    NgxJsonLdModule,
    NgxNavDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
