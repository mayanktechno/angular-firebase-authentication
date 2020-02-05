import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPartsModule } from '../layout-parts/layout-parts.module';

const profileRoutes:Routes =[
  
  {path : "" , component:UserProfileComponent}
]


@NgModule({
  declarations: [UserComponent, UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    LayoutPartsModule
  ]
})
export class UserModule { }
