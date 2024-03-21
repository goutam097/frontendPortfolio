import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPersonalDetailsListPageRoutingModule } from './admin-personal-details-list-routing.module';

import { AdminPersonalDetailsListPage } from './admin-personal-details-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPersonalDetailsListPageRoutingModule
  ],
  declarations: [AdminPersonalDetailsListPage]
})
export class AdminPersonalDetailsListPageModule {}
