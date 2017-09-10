import { SharedPrimengModule } from './../shared-primeng/shared-primeng.module';
import { homeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimengModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
