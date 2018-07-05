import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
import * as moment from 'moment';
import * as _ from 'lodash';

import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private userPatients: AngularFirestoreCollection<any>;
  private userDoctors: AngularFirestoreCollection<any>;
  private userAdmins: AngularFirestoreCollection<any>;
  private dataReadings: AngularFirestoreCollection<any>;
  private dataPatients: AngularFirestoreCollection<any>;
  private dataDoctors: AngularFirestoreCollection<any>;
  private dataTimings: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private database: DatabaseService
  ) {
    this.userPatients = firestore.collection('user-patients');
    this.userDoctors = firestore.collection('user-doctors');
    this.userAdmins = firestore.collection('user-admins');

    this.dataReadings = firestore.collection('data-readings');
    this.dataPatients = firestore.collection('data-patients');
    this.dataDoctors = firestore.collection('data-doctors');
    this.dataTimings = firestore.collection('data-timings');
  }

  enableNetwork() {
    return this.firestore.firestore.enableNetwork();
  }

  disableNetwork() {
    return this.firestore.firestore.disableNetwork();
  }

  sendRemarkToPatient(to: string, from: string, message: string) {
    const _message = { to, from, message };
    const timestamp = moment().format('X');

    this.dataDoctors.add({ ..._message, timestamp })
      .then(() => {
        this.database.createObject('data-doctor', { ..._message, timestamp });
      });
  }

  getPatientMessages(fullname: string) {
    return this.dataPatients.valueChanges().pipe(
      map((values: any[]) => {
        return values.filter(e => e.to === fullname);
      })
    );
  }

  getPatientDetails() {
    return this.userPatients.snapshotChanges().pipe(
      map((values) => {
        return values.map((value) => {
          const data = value.payload.doc.data();
          const pushId = value.payload.doc.id;;
          return { ...data, pushId };
        });
      })
    );
  }

  getPatientReadings(patientNo: string) {
    return this.dataReadings.snapshotChanges().pipe(
      map((values) => {
        const readings = values.map((value) => {

          const index = value.payload.newIndex;
          const data = value.payload.doc.data();

          return { index, ...data };
        }).map((response) => {
          let object = {};
          const index = response.index;
          let reading = response.reading.split(' ');
          reading.map((val) => {
            object[val.split('/')[0]] = val.split('/')[1]
          });
          return { index, ...object };
        }).filter((e: any) => e.patientNo === patientNo);

        return <any[]>_.sortBy(readings, [(message) => message.timestamp]).reverse();
      })
    );
  }

  getDoctorPatients(fullname?: string) {
    return this.userDoctors.snapshotChanges().pipe(
      map((values) => {
        let doc = [];
        values.map((value) => {
          value.payload.doc.ref.collection('patients').onSnapshot(
            (data) => {
              fullname === value.payload.doc.data().fullname
              ? data.docChanges().forEach((data) => {
                  doc.push(data.doc.data());
                }) : 0;
            }
          )
        });
        return doc;
      })
    );
  }

  getOnline() {
    const doctors = this.userDoctors.valueChanges();

    return this.authService.getCurrentUid().pipe(
      switchMap((uid) => {
        return doctors.pipe(
          map((values: any[]) => {
            return values.filter(e => e.uid === uid)[0]
          })
        )
      })
    );
  }

  setTime(setTime: any) {
    setTime['current'] = 0;
    setTime['timing'] = false;
    setTime['timestamp'] = moment().format('X');;

    this.dataTimings.add({ ...setTime })
      .then(() => {
        this.database.createObject('data-timings', { ...setTime });
      })
  }

}
