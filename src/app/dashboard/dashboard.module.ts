import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTableModule,
  MatSnackBarModule,
  MatGridListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {UICarouselModule} from 'ui-carousel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    MatGridListModule,
    AgmCoreModule,
    FlexLayoutModule,
    NgxChartsModule,
    UICarouselModule
  ],
  declarations: [ DashboardComponent ]
})

export class DashboardModule {}
