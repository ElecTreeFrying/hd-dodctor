import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryMaterialModule } from '../common/core/module/material/entry-material.module';

import { EntryComponent } from './entry.component';

import { FirestoreService } from '../common/core/service/firestore.service';
import { DatabaseService } from '../common/core/service/database.service';

@NgModule({
  imports: [
    CommonModule,
    EntryRoutingModule,
    EntryMaterialModule
  ],
  declarations: [
    EntryComponent,
  ],
  providers: [
    FirestoreService,
    DatabaseService
  ]
})
export class EntryModule { }
