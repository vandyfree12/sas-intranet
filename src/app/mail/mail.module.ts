import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MailRoutes } from './mail.routing';
import { MailComponent } from './mail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MailRoutes),
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],
  declarations: [
    MailComponent
  ]
})

export class MailModule {}
