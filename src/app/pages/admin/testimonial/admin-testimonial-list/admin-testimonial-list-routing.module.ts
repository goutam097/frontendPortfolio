import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTestimonialListPage } from './admin-testimonial-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTestimonialListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTestimonialListPageRoutingModule {}
