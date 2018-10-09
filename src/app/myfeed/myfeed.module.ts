import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTableModule,
  MatSnackBarModule,
  MatGridListModule, MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MyfeedComponent } from './myfeed.component';
import {  MyfeedRoutes} from './myfeed.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyfeedRoutes),
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
    MatToolbarModule
  ],
  declarations: [ MyfeedComponent ]
})

export class MyfeedModule {}
