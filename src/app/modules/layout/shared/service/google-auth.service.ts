import { Injectable, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, firestore } from 'firebase';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(private authG: AngularFireAuth,
    private _router: Router,
    private _loaderService :LoaderService,
    private db : AngularFirestore) { }

  // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // Auth logic to run auth providers
  AuthLogin(provider,loader = true) {
    if(loader){
      return this.authG.auth.signInWithPopup(provider)
      // .then(cred => {
      //   console.log(cred);
      //   return this.db.collection('users').doc(cred.user.uid).set({
      //     uid: cred.user.uid,
      //     first_name: cred['additionalUserInfo']['profile']['given_name'],
      //     middle_name: cred['additionalUserInfo']['profile']['family_name'],
      //     last_name: "",
      //     picture: cred['additionalUserInfo']['profile']['picture'],
      //     email: cred['additionalUserInfo']['profile']['email'],
      //     verified_email: cred['additionalUserInfo']['profile']['verified_email'],
      //   });
      // })
    }
  }
  
  AuthSignUp(data,loader=true){
    if(loader){
      return this.authG.auth.createUserWithEmailAndPassword(data.email,data.password).then(cred=>{
        console.log(cred);
        return this.db.collection('users').doc(cred.user.uid).set({
            uid:cred.user.uid,
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            address: data.address,
            email: data.email,
            device_type: data.device_type,
            device_token: data.device_token,
            device_id: data.device_id,
            lat: data.lat,
            long: data.long,
            password: data.password,
            phone_code: data.phone_code,
            phone_no: data.phone_no
          })
      });
    }
  }

  emailPasswordLogin(email , password , loader=true){
    if(loader){
      this._loaderService.loader.next(loader)
      return this.authG.auth.signInWithEmailAndPassword(email,password);
    }
  }

  forgetPasswordAuth(email , loader=true){
    if(loader){
      this._loaderService.loader.next(loader)
      return this.authG.auth.sendPasswordResetEmail(email);
    }
  }
}
