import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SepMenuComponent } from './sep-menu/sep-menu.component';
import { SepFooterComponent } from './sep-footer/sep-footer.component';

@NgModule({
  declarations: [SepMenuComponent, SepFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SepMenuComponent,
    SepFooterComponent
  ]
})
export class NavigationModule { }
