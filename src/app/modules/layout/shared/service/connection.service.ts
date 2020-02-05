import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  online = navigator.onLine;
  connection = new Subject<boolean>()


}
