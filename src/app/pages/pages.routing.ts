import { Routes } from '@angular/router';

import { BlankComponent } from './blank/blank.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'blank',
      component: BlankComponent,
      data: {
        heading: 'Blank page',
        css: ''
      }
    }, {
      path: 'invoice',
      component: InvoiceComponent,
      data: {
        heading: 'Invoice',
        css: ''
      }
    }, {
      path: 'timeline',
      component: TimelineComponent,
      data: {
        heading: 'Timeline',
        css: ''
      }
    }, {
      path: 'pricing',
      component: PricingComponent,
      data: {
        heading: 'Pricing',
        css: 'view-no-padding'
      }
    }]
  }
];
