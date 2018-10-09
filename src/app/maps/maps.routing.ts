import { Routes } from '@angular/router';

import { MapGoogleComponent } from './map-google/map-google.component';
import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';

export const MapRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'google',
      component: MapGoogleComponent,
      data: {
        heading: 'Google',
        css: ''
      }
    }, {
      path: 'leaflet',
      component: MapLeafletComponent,
      data: {
        heading: 'Leaflet',
        css: 'view-no-padding'
      }
    }]
  }
];
