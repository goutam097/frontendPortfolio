import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminServiceCreatePage } from './admin-service-create.page';

const routes: Routes = [
  {
    path: '',
    component: AdminServiceCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminServiceCreatePageRoutingModule {}
