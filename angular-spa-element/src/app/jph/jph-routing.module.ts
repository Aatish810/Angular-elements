import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PostsListComponent } from './posts-list/posts-list.component';

const jphRoutes: Routes = [
  {
    path: "posts",
    component: PostsListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(jphRoutes)
  ],
  exports: [RouterModule]
})
export class JphRoutingModule { }
