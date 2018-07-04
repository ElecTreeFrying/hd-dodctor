import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators'

import { FirestoreService } from '../../core/service/firestore.service';

@Pipe({
  name: 'latestHr'
})
export class LatestHrPipe implements PipeTransform {

  constructor(private firestoreService: FirestoreService) {}

  transform(value: any, args?: any): any {
    return this.firestoreService.getPatientReadings(value.patientNo).pipe(
      map((readings: any[]) => {
        return readings.sort((a, b) => a.index - b.index)
          .map((reading) => reading.hrVal)[0];
      })
    );
  }

}
