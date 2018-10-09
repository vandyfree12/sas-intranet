import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatSliderModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SparklineComponent } from './sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';

import { ChartsRoutes } from './charts.routing';
import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartsRoutes),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    FormsModule,
    NgxChartsModule
  ],
  declarations: [
    ChartsComponent,
    SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent
  ]
})

export class ChartsModule {}
