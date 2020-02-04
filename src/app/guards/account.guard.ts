import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(private _route : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('authorisation') || localStorage.getItem('social-auth')){
      // this.route.navigate([''])
      this._route.navigate(['']);
      return false;
    }

    return true;
  }
  
}
