import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
      this.items = db.collection('orders').valueChanges();
   }
}
