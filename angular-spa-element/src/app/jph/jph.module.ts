import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PostsListComponent } from './posts-list/posts-list.component';

import { JphService } from './services/jph.service';
import { JphRoutingModule } from './jph-routing.module';



@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JphRoutingModule
  ],
  providers:[JphService],
  exports:[PostsListComponent]
})
export class JphModule { }
