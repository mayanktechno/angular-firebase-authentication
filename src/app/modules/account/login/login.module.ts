import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule , MatInputModule, MatIconModule, MatCardModule, MatButtonModule} from '@angular/material';
import { AccountGuard } from 'src/app/guards/account.guard';
import { SharedModule } from '../../layout/shared/shared.module';


const loginRoutes :  Routes =[
  { path: '', component: LoginComponent}
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ],

})
export class LoginModule { }
