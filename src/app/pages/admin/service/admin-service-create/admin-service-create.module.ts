import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminServiceCreatePageRoutingModule } from './admin-service-create-routing.module';

import { AdminServiceCreatePage } from './admin-service-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminServiceCreatePageRoutingModule
  ],
  declarations: [AdminServiceCreatePage]
})
export class AdminServiceCreatePageModule {}
