import { testFormRoutes } from './test-form.routes';
import { RouterModule } from '@angular/router';
import { SharedPrimengModule } from './../shared-primeng/shared-primeng.module';
import { TestFormComponent } from './test-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimengModule,
    RouterModule.forChild(testFormRoutes)
  ],
  declarations: [
    TestFormComponent
  ]
})
export class TestFormModule { }
