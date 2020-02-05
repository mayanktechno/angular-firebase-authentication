import { Injectable, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(private authG: AngularFireAuth,
    private _router: Router,
    private _loaderService :LoaderService) { }

  // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // Auth logic to run auth providers
  AuthLogin(provider,loader = true) {
    if(loader){
      return this.authG.auth.signInWithPopup(provider);
    }
  }

}
