import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  createObject(path: string, object: any) {
    this.db.list<any>(path).push(object);
  }

}
