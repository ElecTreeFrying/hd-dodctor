import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryMaterialModule } from '../common/core/module/material/entry-material.module';

import { EntryComponent } from './entry.component';
import { LoginDialogComponent } from '../common/shared/component/login-dialog/login-dialog.component';

import { SharedService } from '../common/core/service/shared.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntryRoutingModule,
    EntryMaterialModule
  ],
  declarations: [
    EntryComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    SharedService
  ]
})
export class EntryModule { }
