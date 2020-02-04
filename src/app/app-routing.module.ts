import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACCOUNT } from './constant/routes';
import { NotFoundComponent } from './modules/not-found/not-found.component';


const appRoutes: Routes = [

  { path: '', loadChildren: () => import('../app/modules/layout/layout.module').then(mod => mod.LayoutModule) },

  { path: ACCOUNT, loadChildren: () => import('../app/modules/account/account.module').then(mod => mod.AccountModule) },
  //   { path: LINK_EXPIRED, component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
