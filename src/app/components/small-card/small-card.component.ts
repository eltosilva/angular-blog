import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../data/post';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit() {}
}
