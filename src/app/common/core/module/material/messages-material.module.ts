import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MessagesMaterialModule { }
