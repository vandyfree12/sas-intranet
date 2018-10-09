import { Routes } from '@angular/router';

import { MailComponent } from './mail.component';

export const MailRoutes: Routes = [{
  path: '',
  component: MailComponent,
  data: {
    heading: 'Messages',
    css: 'view-no-padding'
  }
}];
