import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPersonalDetailsListPage } from './admin-personal-details-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPersonalDetailsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPersonalDetailsListPageRoutingModule {}
