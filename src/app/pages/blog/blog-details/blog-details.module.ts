import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDetailsPageRoutingModule } from './blog-details-routing.module';

import { BlogDetailsPage } from './blog-details.page';
import { ComponentModule } from 'src/app/components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogDetailsPageRoutingModule,
    ComponentModule
  ],
  declarations: [BlogDetailsPage]
})
export class BlogDetailsPageModule {}
