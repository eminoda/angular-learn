import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavListComponent } from './left-nav-list/left-nav-list.component';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // form表单要用
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LeftNavListComponent,
    PanelContentComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LeftNavListComponent,
    PanelContentComponent
  ]
})
export class SharedCommonModule { }
