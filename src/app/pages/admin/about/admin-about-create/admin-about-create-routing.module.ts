import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAboutCreatePage } from './admin-about-create.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAboutCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAboutCreatePageRoutingModule {}
