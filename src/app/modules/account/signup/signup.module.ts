import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../../layout/shared/shared.module';


const signupRoutes : Routes =[
  {path :'',component:SignupComponent}
]

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(signupRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class SignupModule { }
