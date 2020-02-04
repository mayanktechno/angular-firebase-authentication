import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
   toast = new BehaviorSubject<any>(false);

  constructor() { }

  success(textToDisplay, duration) {
    
    let data = {
      msg: textToDisplay,
      time: duration
    }
    console.log(data);
    if (textToDisplay) {
      this.toast.next(data);
    }
  }
}
