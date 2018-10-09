import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatExpansionModule} from '@angular/material';

import { DocsRoutes } from './docs.routing';
import { DocsComponent } from './docs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DocsRoutes),
    MatExpansionModule
  ],
  declarations: [
    DocsComponent
  ]
})

export class DocsModule {}
