import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridimageComponent } from './gridimage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GridimageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[GridimageComponent]
})
export class GridimageModule { }
