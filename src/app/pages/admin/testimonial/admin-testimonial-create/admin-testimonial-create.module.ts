import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTestimonialCreatePageRoutingModule } from './admin-testimonial-create-routing.module';

import { AdminTestimonialCreatePage } from './admin-testimonial-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTestimonialCreatePageRoutingModule
  ],
  declarations: [AdminTestimonialCreatePage]
})
export class AdminTestimonialCreatePageModule {}
