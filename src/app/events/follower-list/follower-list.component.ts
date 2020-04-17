import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Groups } from './../../modules/groups/groups.module'

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  searchFollower: string;
  fire_groups: Groups[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getGroups().subscribe(data =>{
      this.fire_groups = data;
      console.log(this.fire_groups);
    })
  }
}
