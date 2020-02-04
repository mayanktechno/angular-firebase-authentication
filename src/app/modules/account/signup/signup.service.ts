import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { USER_SIGNUP } from 'src/app/constant/url';
import { LoaderService } from '../../layout/shared/service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http : HttpClient,
    private _loaderService :LoaderService) { }

  registerUser(data , loader=true){
    this._loaderService.loader.next(loader);
    return this._http.post(`${environment.url}${USER_SIGNUP}`, data)
  }
}

