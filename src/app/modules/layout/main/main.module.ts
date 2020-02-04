import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { LayoutPartsModule } from '../layout-parts/layout-parts.module';
import { HomegridModule } from '../homegrid/homegrid.module';
import { GridimageModule } from '../gridimage/gridimage.module';
import { ProductComponent } from './product/product.component';
import { MatTabsModule, MatCardModule, MatIconModule } from '@angular/material';
import { RequirementsComponent } from './requirements/requirements.component';


const mainRoute : Routes = [
  {path : "" ,component:MainComponent},
  {path :"product/:id" ,component :ProductComponent}
]


@NgModule({
  declarations: [MainComponent, ProductComponent, RequirementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoute),
    LayoutPartsModule,
    HomegridModule,
    LayoutPartsModule,
    MatTabsModule,
    MatCardModule,
    GridimageModule,
    MatIconModule
  ]
})
export class MainModule { }
