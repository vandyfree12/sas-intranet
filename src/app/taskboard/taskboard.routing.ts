import { Routes } from '@angular/router';

import { TaskboardComponent } from './taskboard.component';

export const TaskboardRoutes: Routes = [
  {
    path: '',
    component: TaskboardComponent,
    data: {
      heading: 'Taskboard',
      css: 'view-no-padding'
    }
  }
];
