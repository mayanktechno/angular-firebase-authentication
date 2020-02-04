import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const forgetRoutes: Routes = [
  { path: '', component: ForgotPasswordComponent }
]


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(forgetRoutes)
  ]
})
export class ForgotPasswordModule { }
