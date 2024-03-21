import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBlogCreatePage } from './admin-blog-create.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBlogCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBlogCreatePageRoutingModule {}
