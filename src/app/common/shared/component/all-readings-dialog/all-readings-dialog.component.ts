import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../../../core/service/firestore.service';

@Component({
  selector: 'app-all-readings-dialog',
  templateUrl: './all-readings-dialog.component.html',
  styleUrls: ['./all-readings-dialog.component.scss']
})
export class AllReadingsDialogComponent implements OnInit {

  readings: Observable<any>;
  isAdded: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.readings = this.firestoreService.getPatientReadings(this.data.patientNo);

    this.readings.subscribe(() => {
      this.isAdded = true;
    });
  }


}
