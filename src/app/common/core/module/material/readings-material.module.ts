import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatListModule
} from '@angular/material';

@NgModule({
  exports: [
    CdkAccordionModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatListModule
  ]
})
export class ReadingsMaterialModule { }
