import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBlogListPage } from './admin-blog-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBlogListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBlogListPageRoutingModule {}
