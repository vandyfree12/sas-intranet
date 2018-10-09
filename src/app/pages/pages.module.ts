import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';
import { BlankComponent } from './blank/blank.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    CdkTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    BlankComponent,
    InvoiceComponent,
    TimelineComponent,
    PricingComponent
  ]
})

export class PagesModule {}
