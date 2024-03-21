import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTestimonialCreatePage } from './admin-testimonial-create.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTestimonialCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTestimonialCreatePageRoutingModule {}
