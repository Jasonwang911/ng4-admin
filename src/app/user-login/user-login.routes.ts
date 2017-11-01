import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const userRoutes = [
  // {
    // path: '',
    // redirectTo: 'login',
    // pathMath: 'full'
  // },
  {
    path: '',
    component: LoginComponent
  }
];
