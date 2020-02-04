import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { UtilityService } from '../modules/layout/shared/service/utility.service';
// import { LoaderService } from '../module/shared/services/loader.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private _utilityService: UtilityService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = {};
    const token = this._utilityService.getAuthToken();
    if (token) {
      headers['authorization'] = 'Bearer ' + token;
    }
    else {
      headers['authorization'] = 'Basic dXN0YW5kYnk6dXN0YW5kYnlAMTIz';
    }
    headers['timezone'] = '0';
    headers['device_type'] = 'web';
    headers['api_key'] = '1234'

    request = request.clone({
      setHeaders: headers
    });

    return next.handle(request).pipe(
      tap(
        (data) => {
          if (data instanceof HttpResponse) {
            //   this._loaderService.loader.next(false);
            console.log(data);
          }
        },
        (err: any) => {
          // this._loaderService.loader.next(false);
          if (err instanceof HttpErrorResponse) {
            //this._utilityService.errorAlert(err);
            if (err.status === 401 || err.error.responseType == 'UNAUTHORIZED') {
              this._utilityService.clearStorage();
              this.router.navigate(['/account/login']);
            }
          }
        }
      ));
  }
}