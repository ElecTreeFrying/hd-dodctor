import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AddRemarksDialogComponent } from '../../../common/shared/component/add-remarks-dialog/add-remarks-dialog.component';
import { SetTimeDialogComponent } from '../../../common/shared/component/set-time-dialog/set-time-dialog.component';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {

  dialogRef_AR: MatDialogRef<AddRemarksDialogComponent>;
  dialogRef_ST: MatDialogRef<SetTimeDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addRemarks() {
    this.dialogRef_AR = this.dialog.open(AddRemarksDialogComponent, { });
  }

  setTime() {
    this.dialogRef_ST = this.dialog.open(SetTimeDialogComponent, { });
  }

}
