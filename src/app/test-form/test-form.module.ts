import { SharedCommonModule } from './../shared-common/shared-common.module';
import { testFormRoutes } from './test-form.routes';
import { RouterModule } from '@angular/router';
import { SharedPrimengModule } from './../shared-primeng/shared-primeng.module';
import { TestFormComponent } from './test-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDirvenFormComponent } from './template-dirven-form/template-dirven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ValidatorFormComponent } from './validator-form/validator-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimengModule,
    SharedCommonModule,
    RouterModule.forChild(testFormRoutes)
  ],
  declarations: [
    TestFormComponent,
    TemplateDirvenFormComponent,
    ReactiveFormComponent,
    DynamicFormComponent,
    ValidatorFormComponent,
    BasicFormComponent
  ]
})
export class TestFormModule { }
