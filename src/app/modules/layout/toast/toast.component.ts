import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  msg: any;
  view: boolean;
  constructor(private _toastService: ToastService) { }

  ngOnInit() {
    this._toastService.toast.subscribe((data) => {
      console.log(data);
      this.msg = data;
      this.view = true;
      setTimeout(() => {
        this.view = false;
      }, data.time);
    });
  }
 
}
