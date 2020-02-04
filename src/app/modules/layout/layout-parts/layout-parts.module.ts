import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { ReusableFormComponent } from './reusable-form/reusable-form.component';



@NgModule({
  declarations: [FooterComponent ,HeaderComponent,MainContentComponent, ReusableFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    MatFormFieldModule,
    ReusableFormComponent,
    MatInputModule,
    MatSelectModule,
    MatOptionModule]
})
export class LayoutPartsModule { }
