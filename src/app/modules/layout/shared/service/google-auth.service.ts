import { Injectable, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(private authG: AngularFireAuth,
    private _router: Router) { }

  // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.authG.auth.signInWithPopup(provider);
  }

}
