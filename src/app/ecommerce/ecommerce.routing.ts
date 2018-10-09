import { Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductsCompactComponent } from './products-compact/products-compact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const EcommerceRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'products',
      component: ProductsComponent,
      data: {
        heading: 'Products',
        css: 'view-no-padding'
      }
    }, {
      path: 'compact',
      component: ProductsCompactComponent,
      data: {
        heading: 'Compact listing',
        css: 'view-no-padding'
      }
    }, {
      path: 'detail',
      component: ProductDetailComponent,
      data: {
        heading: 'Detail product',
        css: ''
      }
    }]
  }
];
