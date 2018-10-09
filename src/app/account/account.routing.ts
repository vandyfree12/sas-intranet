import { Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const AccountRoutes: Routes = [
  { path: '', children: [
      { path: 'forgot', component: ForgotComponent, data: { heading: 'Forgot password', css: ''} },
      { path: 'lockscreen', component: LockscreenComponent, data: { heading: 'Lockscreen', css: '' } },
      { path: 'signin', component: SigninComponent, data: { heading: 'Signin', css: ''} },
      { path: 'signup', component: SignupComponent, data: { heading: 'Signup',  css: '' } }
    ]
  }
];
