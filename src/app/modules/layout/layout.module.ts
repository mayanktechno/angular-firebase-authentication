import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { ABOUT, BECOME_PROFESSIONAL , USER_PROFILE } from 'src/app/constant/routes';


const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent, 
    children: [
      { path: '',loadChildren:()=> import('../layout/main/main.module').then(mod => mod.MainModule) },
    ]
  },
  {
    path: ABOUT, loadChildren: () => import('../layout/about/about.module').then(mod => mod.AboutModule) 
  },
  {
    path: BECOME_PROFESSIONAL, loadChildren: () => import('../layout/become-professional/become-professional.module').then(mod => mod.BecomeProfessionalModule)
  },
  {
    path: USER_PROFILE, loadChildren: () => import('../layout/user/user.module').then(mod => mod.UserModule)
  }

]

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes)
  ]
})
export class LayoutModule { }
