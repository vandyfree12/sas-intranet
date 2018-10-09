import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DynamicFormsCoreModule, DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import { TreeModule } from 'angular-tree-component';

import { FormRoutes } from './forms.routing';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { FormTreeComponent } from './form-tree/form-tree.component';

import {
  customDateRangeValidator,
} from './forms.validators';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatNativeDateModule,
    FlexLayoutModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule,
    TreeModule
   ],
  declarations: [
    FormUploadComponent,
    FormValidationComponent,
    FormDynamicComponent,
    FormTreeComponent
  ],
  providers: [
    {
        provide: NG_VALIDATORS,
        useValue: customDateRangeValidator,
        multi: true
    },
    {
        provide: DYNAMIC_VALIDATORS,
        useValue: new Map<string, Validator | ValidatorFactory>([
            ['customDateRangeValidator', customDateRangeValidator],
        ])
    }
  ],
})

export class FormModule {}
