import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { TaskboardRoutes } from './taskboard.routing';
import { TaskboardComponent } from './taskboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TaskboardRoutes),
    PerfectScrollbarModule,
    DragulaModule
  ],
  declarations: [
    TaskboardComponent
  ]
})

export class TaskboardModule {}
