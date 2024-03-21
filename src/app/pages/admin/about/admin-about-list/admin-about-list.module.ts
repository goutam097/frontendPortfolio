import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAboutListPageRoutingModule } from './admin-about-list-routing.module';

import { AdminAboutListPage } from './admin-about-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAboutListPageRoutingModule
  ],
  declarations: [AdminAboutListPage]
})
export class AdminAboutListPageModule {}
