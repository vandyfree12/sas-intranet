import { Routes } from '@angular/router';

import {MyfeedComponent} from "./myfeed.component";

export const MyfeedRoutes: Routes = [{
  path: '', component: MyfeedComponent, data: {heading: 'Myfeed', css: ''}
}];
