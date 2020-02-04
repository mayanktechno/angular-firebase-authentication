import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilityService {
  constructor() { }
  trim(data) {
    for (const item in data) {
      if (typeof data[item] === "string") {
        data[item] = data[item].trim();
      }
    }
    return data;
  }
  getAuthToken() {
    return localStorage.getItem('authorisation');
  }

  clearStorage() {
    localStorage.removeItem('authorisation');

  }
}