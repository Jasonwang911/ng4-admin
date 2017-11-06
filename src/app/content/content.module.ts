import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { contentRoutes } from './content.routes';
import { ContentComponent } from './content.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { BannerListComponent } from './banner/banner-list/banner-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forChild(contentRoutes),
  ],
  declarations: [
    ContentComponent,
    UserListComponent,
    AddUserComponent,
    BannerListComponent
  ]
})
export class ContentModule { }
