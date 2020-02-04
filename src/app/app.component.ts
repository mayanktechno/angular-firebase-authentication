import { Component } from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { LoaderService } from './modules/layout/shared/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amigoweb';
  loader = false;

  constructor(
    private _router: Router,
    private _loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.listenRouterEvents();
  }

  /**
   * Method For Initiating and stopping loader on route change
   */
  listenRouterEvents() {
    this._router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this._loaderService.loader.next(true)
      }
      else if (event instanceof NavigationEnd) {
        this._loaderService.loader.next(false)
      }
    });
    this._loaderService.loader.subscribe(
      data => {
        setTimeout(() => {
          this.loader = data;
        })
      }
    )
  }

}
