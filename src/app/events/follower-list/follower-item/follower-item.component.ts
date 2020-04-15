import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-follower-item',
  templateUrl: './follower-item.component.html',
  styleUrls: ['./follower-item.component.css']
})
export class FollowerItemComponent implements OnInit {

  @Input() group_item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
