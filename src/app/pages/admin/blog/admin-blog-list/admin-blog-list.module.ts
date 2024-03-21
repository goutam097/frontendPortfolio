import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBlogListPageRoutingModule } from './admin-blog-list-routing.module';

import { AdminBlogListPage } from './admin-blog-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBlogListPageRoutingModule
  ],
  declarations: [AdminBlogListPage]
})
export class AdminBlogListPageModule {}
