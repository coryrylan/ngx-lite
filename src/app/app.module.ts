import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NgxDebounceClickModule } from './../lib/ngx-debounce-click/ngx-debounce-click.module';
import { NgxEqModule } from './../lib/ngx-eq/ngx-eq.module';
import { NgxInViewportModule } from './../lib/ngx-in-viewport/ngx-in-viewport.module';
import { NgxInputStarRatingModule } from './../lib/ngx-input-star-rating/ngx-input-star-rating.module';
import { NgxJsonLdModule } from './../lib/ngx-json-ld/ngx-json-ld.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocsNgxInViewportComponent } from './docs/docs-ngx-in-viewport/docs-ngx-in-viewport.component';
import { DocsNgxDebounceClickComponent } from './docs/docs-ngx-debounce-click/docs-ngx-debounce-click.component';
import { DocsNgxEqComponent } from './docs/docs-ngx-eq/docs-ngx-eq.component';
import { DocsNgxInputStarRatingComponent } from './docs/docs-ngx-input-star-rating/docs-ngx-input-star-rating.component';
import { DocsNgxJsonLdComponent } from './docs/docs-ngx-json-ld/docs-ngx-json-ld.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsNgxInViewportComponent,
    DocsNgxDebounceClickComponent,
    DocsNgxEqComponent,
    DocsNgxInputStarRatingComponent,
    DocsNgxJsonLdComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxDebounceClickModule,
    NgxEqModule.forRoot(),
    NgxInViewportModule,
    NgxInputStarRatingModule,
    NgxJsonLdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
