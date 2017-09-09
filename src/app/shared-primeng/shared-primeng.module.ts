import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule, TabViewModule, AccordionModule } from 'primeng/primeng';
// 这是一个特性模块，用于到处primeng
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    PanelModule,
    TabViewModule,
    AccordionModule
  ]
})
export class SharedPrimengModule { }
