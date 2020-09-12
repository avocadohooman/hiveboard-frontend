import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Groups } from './../modules/groups/groups.module';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  searchFollower: string;
  fire_groups: Groups[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.api.getGroups().subscribe(data =>{
    //   this.fire_groups = data;
    //   console.log(this.fire_groups);
    // });
  }

}
