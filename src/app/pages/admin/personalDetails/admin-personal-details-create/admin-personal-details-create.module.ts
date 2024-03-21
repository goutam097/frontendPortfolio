import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPersonalDetailsCreatePageRoutingModule } from './admin-personal-details-create-routing.module';

import { AdminPersonalDetailsCreatePage } from './admin-personal-details-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPersonalDetailsCreatePageRoutingModule
  ],
  declarations: [AdminPersonalDetailsCreatePage]
})
export class AdminPersonalDetailsCreatePageModule {}
