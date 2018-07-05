import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators'
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  listRef: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.listRef = db.list<any>('data-readings');
  }

  createObject(path: string, object: any) {
    this.db.list<any>(path).push(object);
  }

  getPatientReadings(patientNo: string) {
    return this.listRef.snapshotChanges().pipe(
      map((values) => {
        const readings = values.map((value) => {
          let object = {};
          const data = value.payload.toJSON();
          let reading = data.toString().split(' ');
          reading.map((val) => {
            object[val.split('/')[0]] = val.split('/')[1]
          });
          return { ...object };
        }).filter((e: any) => e.patientNo === patientNo);

        return <any[]>_.sortBy(readings, [(message) => message.timestamp]).reverse();
      })
    )
  }

}
