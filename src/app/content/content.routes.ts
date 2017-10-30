import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';

export const contentRoutes = [
    {
        path: '', 
        component: ContentComponent,
        children: [
            {path: '', redirectTo: 'user-list'},
            // 用户列表页面
            {path: 'user-list', component: UserListComponent},
            // 新增用户页面
            { path: 'add-user', component: AddUserComponent },
        ]
    }
]