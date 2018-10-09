import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutes } from './widgets.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetsRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    AgmCoreModule,
    NgxChartsModule
  ],
  declarations: [WidgetsComponent]
})

export class WidgetsModule {}
