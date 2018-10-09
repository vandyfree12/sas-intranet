import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatProgressBarModule,
  MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

import { FullcalendarRoutes } from './fullcalendar.routing';
import { FullcalendarComponent, CalendarDialogComponent } from './fullcalendar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FullcalendarRoutes),
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDialogModule,
    CalendarModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    FullcalendarComponent,
    CalendarDialogComponent
  ],
  entryComponents: [ CalendarDialogComponent ],
})

export class FullcalendarModule {}
