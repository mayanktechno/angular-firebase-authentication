import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN } from '../../../constant/url';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../../layout/shared/service/loader.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient,
    private _loaderService : LoaderService) { }

  login(data ,loader=true){
    if(loader){
      this._loaderService.loader.next(loader);
      return this._http.post(`${environment.url}${USER_LOGIN}`,data);
    }
  }
}
