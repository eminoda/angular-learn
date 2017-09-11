import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavListComponent } from './left-nav-list/left-nav-list.component';
import { PanelContentComponent } from './panel-content/panel-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LeftNavListComponent,
    PanelContentComponent
  ],
  exports: [
    LeftNavListComponent,
    PanelContentComponent
  ]
})
export class SharedCommonModule { }
