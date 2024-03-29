import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  @Input() filterText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getName($event: string): void {
    this.filterText = $event;
  }

}
