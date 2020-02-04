import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeProfessionalComponent } from './become-professional.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPartsModule } from '../layout-parts/layout-parts.module';
import { MatCardModule } from '@angular/material';

const routes :Routes =[
  {path:'', component: BecomeProfessionalComponent}
]

@NgModule({
  declarations: [BecomeProfessionalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutPartsModule,
    MatCardModule
  ]
})
export class BecomeProfessionalModule { }
