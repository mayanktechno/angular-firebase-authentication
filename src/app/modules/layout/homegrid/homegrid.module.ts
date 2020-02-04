import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomegridComponent } from './homegrid.component';



@NgModule({
  declarations: [HomegridComponent],
  imports: [
    CommonModule
  ],
  exports:[HomegridComponent]
})
export class HomegridModule { }
