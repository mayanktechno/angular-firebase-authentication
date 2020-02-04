import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../../layout/shared/service/loader.service';
import { USER_FORGOT_PASSWORD } from 'src/app/constant/url';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private _http :HttpClient ,
    private _loaderService : LoaderService) { }

  sendEmail(data , loader = true){
    if(loader){
      this._loaderService.loader.next(loader);
      return this._http.post(`${environment.url}${USER_FORGOT_PASSWORD}`, data)
    }
  }
}
