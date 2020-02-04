import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastService } from './toast.service';

const routes :  Routes =[
  {path : '' , component : ToastComponent}
]

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports : [ToastComponent],

})
export class ToastModule { }
