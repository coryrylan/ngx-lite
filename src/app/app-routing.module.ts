import { DocsNgxCodeExampleComponent } from './docs/docs-ngx-code-example/docs-ngx-code-example.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'docs', loadChildren: 'app/docs/docs.module#DocsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
