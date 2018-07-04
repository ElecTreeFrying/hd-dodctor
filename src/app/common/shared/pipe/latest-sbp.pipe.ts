import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators'

import { FirestoreService } from '../../core/service/firestore.service';

@Pipe({
  name: 'latestSbp'
})
export class LatestSbpPipe implements PipeTransform {

  constructor(private firestoreService: FirestoreService) {}

  transform(value: any, args?: any): any {
    return this.firestoreService.getPatientReadings(value.patientNo).pipe(
      map((readings: any[]) => {
        return readings.sort((a, b) => a.index - b.index)
          .map((reading) => reading.sbpVal)[0];
      })
    );
  }

}
