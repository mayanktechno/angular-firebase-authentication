import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { LOGIN, SIGNUP, FORGET_PASSWORD } from '../../constant/routes';
import { AccountGuard } from 'src/app/guards/account.guard';

const accountRoutes : Routes =[
  {
    path: '', component: AccountComponent,
    children: [
      { path: '', redirectTo: LOGIN, pathMatch: 'full' },
      { path: LOGIN, loadChildren: () => import('../account/login/login.module').then(mod => mod.LoginModule), canActivate: [AccountGuard]},
      { path: SIGNUP, loadChildren: () => import('../account/signup/signup.module').then(mod => mod.SignupModule), canActivate: [AccountGuard]},
      { path: FORGET_PASSWORD, loadChildren: () => import('../account/forgot-password/forgot-password.module').then(mod => mod.ForgotPasswordModule), canActivate: [AccountGuard]}
    ]
  }
]

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ]
})
export class AccountModule { }
