import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAboutCreatePageRoutingModule } from './admin-about-create-routing.module';

import { AdminAboutCreatePage } from './admin-about-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAboutCreatePageRoutingModule
  ],
  declarations: [AdminAboutCreatePage]
})
export class AdminAboutCreatePageModule {}
