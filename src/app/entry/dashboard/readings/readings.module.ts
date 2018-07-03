import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReadingsRoutingModule } from './readings-routing.module';
import { ReadingsMaterialModule } from '../../../common/core/module/material/readings-material.module';

import { ReadingsComponent } from './readings.component';
import { AddRemarksDialogComponent } from '../../../common/shared/component/add-remarks-dialog/add-remarks-dialog.component';
import { SetTimeDialogComponent } from '../../../common/shared/component/set-time-dialog/set-time-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReadingsRoutingModule,
    ReadingsMaterialModule
  ],
  declarations: [
    ReadingsComponent,
    AddRemarksDialogComponent,
    SetTimeDialogComponent
  ],
  entryComponents: [
    AddRemarksDialogComponent,
    SetTimeDialogComponent
  ]
})
export class ReadingsModule { }
