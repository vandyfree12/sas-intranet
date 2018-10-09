import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import {AuthGuard} from './account/auth-guard.service';

export const AppRoutes: Routes = [
  { path: '', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'calendar', loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'},
      {path: 'messages', loadChildren: './mail/mail.module#MailModule'},
      {path: 'social', loadChildren: './social/social.module#SocialModule'},
      {path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule'},
      {path: 'material', loadChildren: './material/material.module#MaterialComponentsModule'},
      {path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule'},
      {path: 'taskboard', loadChildren: './taskboard/taskboard.module#TaskboardModule'},
      {path: 'forms', loadChildren: './forms/forms.module#FormModule'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'maps', loadChildren: './maps/maps.module#MapModule'},
      {path: 'dragndrop', loadChildren: './dragndrop/dragndrop.module#DragndropModule'},
      {path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
      {path: 'documentation', loadChildren: './docs/docs.module#DocsModule'},
      {path: 'posts', loadChildren: './posts/posts.module#PostsModule'},
      {path: 'myfeed', loadChildren: './myfeed/myfeed.module#MyfeedModule'}
    ]
  },
  { path: '', component: AuthLayoutComponent,
    children: [
      {path: 'account', loadChildren: './account/account.module#AccountModule'},
      {path: 'error', loadChildren: './error/error.module#ErrorModule'}
    ]
  },
  { path: '**', redirectTo: 'error/404' }
];
