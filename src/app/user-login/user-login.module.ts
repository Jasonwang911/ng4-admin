import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';

import { userRoutes } from './user-login.routes';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [LoginComponent]
})
export class UserLoginModule { }
