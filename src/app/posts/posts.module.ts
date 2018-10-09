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
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {PostsRoutes} from './posts.routing';
import { PostsComponent } from './posts.component';

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PostsRoutes),
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
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule
  ],
  declarations: [
    PostsComponent,
  ],
})

export class PostsModule {}
