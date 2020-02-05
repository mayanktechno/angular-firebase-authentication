import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

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
}
