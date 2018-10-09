import { Routes } from '@angular/router';

import { DragndropComponent } from './dragndrop.component';

export const DragndropRoutes: Routes = [
  {
    path: '',
    component: DragndropComponent,
    data: {
      heading: 'Drag and drop',
      css: ''
    }
  }
];
