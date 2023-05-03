import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../data/post';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit() {}
}
