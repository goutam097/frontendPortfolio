import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminServiceListPageRoutingModule } from './admin-service-list-routing.module';

import { AdminServiceListPage } from './admin-service-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminServiceListPageRoutingModule
  ],
  declarations: [AdminServiceListPage]
})
export class AdminServiceListPageModule {}
