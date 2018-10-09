import { Routes } from '@angular/router';

import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { FormTreeComponent } from './form-tree/form-tree.component';

export const FormRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'upload',
      component: FormUploadComponent,
      data: {
        heading: 'File upload',
        css: ''
      }
    }, {
      path: 'validation',
      component: FormValidationComponent,
      data: {
        heading: 'Form validation',
        css: ''
      }
    }, {
      path: 'dynamic',
      component: FormDynamicComponent,
      data: {
        heading: 'Dynamic forms',
        css: ''
      }
    }, {
      path: 'tree',
      component: FormTreeComponent,
      data: {
        heading: 'Tree',
        css: ''
      }
    }]
  }
];
