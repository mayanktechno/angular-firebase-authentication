import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template:'<router-outlet></router-outlet>'
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
