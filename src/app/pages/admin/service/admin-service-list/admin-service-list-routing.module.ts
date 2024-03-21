import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminServiceListPage } from './admin-service-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdminServiceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminServiceListPageRoutingModule {}
