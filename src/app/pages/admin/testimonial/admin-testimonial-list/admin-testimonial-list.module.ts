import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTestimonialListPageRoutingModule } from './admin-testimonial-list-routing.module';

import { AdminTestimonialListPage } from './admin-testimonial-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTestimonialListPageRoutingModule
  ],
  declarations: [AdminTestimonialListPage]
})
export class AdminTestimonialListPageModule {}
