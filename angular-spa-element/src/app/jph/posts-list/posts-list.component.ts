import { Component, OnInit } from '@angular/core';

import { Post } from "../models/post";

import { JphService } from "../services/jph.service";

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private _jphService: JphService) { }
  title: string = "Json Placeholder's Posts Data!";
  posts: Post[] = [];
  ngOnInit() {
    this._jphService.getAllPosts().subscribe(
      data => this.posts = data,
      err => console.log(err)
    );
  }
}
