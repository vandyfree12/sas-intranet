import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule, MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SocialRoutes } from './social.routing';
import { SocialComponent } from './social.component';
import {AvatarModule} from "ngx-avatar";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SocialRoutes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    FlexLayoutModule,
    AvatarModule
  ],
  declarations: [
    SocialComponent,
  ],
})

export class SocialModule {}
