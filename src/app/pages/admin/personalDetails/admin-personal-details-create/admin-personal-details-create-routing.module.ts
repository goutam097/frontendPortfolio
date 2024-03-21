import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPersonalDetailsCreatePage } from './admin-personal-details-create.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPersonalDetailsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPersonalDetailsCreatePageRoutingModule {}
