import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { TablePinningComponent } from './table-pinning/table-pinning.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'fullscreen',
      component: DataTableComponent,
      data: {
        heading: 'Fullscreen',
        css: 'view-no-padding'
      }
    }, {
      path: 'editing',
      component: TableEditingComponent,
      data: {
        heading: 'Editing',
        css: ''
      }
    }, {
      path: 'filter',
      component: TableFilterComponent,
      data: {
        heading: 'Filer',
        css: ''
      }
    }, {
      path: 'paging',
      component: TablePagingComponent,
      data: {
        heading: 'Paging',
        css: ''
      }
    }, {
      path: 'pinning',
      component: TablePinningComponent,
      data: {
        heading: 'Pinned',
        css: ''
      }
    }, {
      path: 'selection',
      component: TableSelectionComponent,
      data: {
        heading: 'Selection',
        css: ''
      }
    }, {
      path: 'sorting',
      component: TableSortingComponent,
      data: {
        heading: 'Sorting',
        css: ''
      }
    }]
  }
];
