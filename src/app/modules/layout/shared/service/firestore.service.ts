import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';

interface User{
  uid:string,
  first_name: string,
  middle_name: string,
  last_name: string,
  address: string,
  email: string,
  device_type: string,
  device_token: string,
  device_id: string,
  lat: string,
  long: string,
  password: string,
  phone_code: string,
  phone_no: string
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  user: Observable<User>;
  constructor(private db: AngularFirestore,
      private afAuth : AngularFireAuth) { 
 
  }

  getDataUser(uid){
          return this.db.doc<User>(`users/${uid}`)
  }
  createUser(value) {
    console.log(value.additionalUserInfo.profile);
    return this.db.collection('users').add({
    name: value.additionalUserInfo.profile.name,
    email : value.additionalUserInfo.profile.email,
    picture : value.additionalUserInfo.profile.picture,
    });
  }

  existEmail(value){
    return this.db.collection('users', ref => ref.where('email', "==", value.additionalUserInfo.profile.email)).snapshotChanges();
  }

  existNormalUser(value){
    return this.db.collection('users', ref => ref.where('email', "==", value)).snapshotChanges();
  }
}
