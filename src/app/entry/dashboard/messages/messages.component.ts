import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ExpandMessagesDialogComponent } from '../../../common/shared/component/expand-messages-dialog/expand-messages-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  dialogRef: MatDialogRef<ExpandMessagesDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  expandMessages() {
    this.dialogRef = this.dialog.open(ExpandMessagesDialogComponent, { });
  }

}
