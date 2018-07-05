import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'support', loadChildren: './support/support.module#SupportModule' },
  { path: 'docs', loadChildren: './docs/docs.module#DocsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
