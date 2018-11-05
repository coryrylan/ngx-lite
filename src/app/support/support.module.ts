import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: SupportComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SupportComponent]
})
export class SupportModule {}
