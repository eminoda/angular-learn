import { SharedCommonModule } from './../shared-common/shared-common.module';
import { TestComponentComponent } from './test-component.component';
import { TestCommunicationComponent } from './test-communication/test-communication.component';
import { TestLifeComponent } from './test-life/test-life.component';
import { TestTemplateComponent } from './test-template/test-template.component';
import { testComponentRoutes } from './test-component.routes';
import { RouterModule } from '@angular/router';
import { SharedPrimengModule } from './../shared-primeng/shared-primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimengModule,
    SharedCommonModule,
    RouterModule.forChild(testComponentRoutes)
  ],
  declarations: [
    TestComponentComponent,
    TestTemplateComponent,
    TestLifeComponent,
    TestCommunicationComponent
  ]
})
export class TestComponentModule { }
