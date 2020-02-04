import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { }

  getDataJson(loader = true) {
    if (loader) {
      return this._http.get('./assets/json/db.json');
    }
  }

   getDataDetail(id){
    // if(loader){
      return this._http.get('./assets/json/db.json',id)
    // }
  }
}

