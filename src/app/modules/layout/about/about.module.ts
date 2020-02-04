import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPartsModule } from '../layout-parts/layout-parts.module';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
const routes :Routes =[
  {path : '' ,component:AboutComponent}
]


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutPartsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AboutModule { }
