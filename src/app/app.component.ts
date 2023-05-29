import { Component, OnInit } from '@angular/core';
import { dataFake } from './data/data-fake';
import { Post } from './data/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: Post[];
  constructor() {
    this.posts = dataFake;
  }

  ngOnInit() {}
}
