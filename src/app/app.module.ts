import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ACCOUNT, LAYOUT } from './constant/routes';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/layout/layout-parts/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { UtilityService } from './modules/layout/shared/service/utility.service';
// import { FooterComponent } from './modules/layout/lasyout-parts/footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastModule } from '../app/modules/layout/toast/toast.module';
import { SharedModule } from './modules/layout/shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

 

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [

    UtilityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
