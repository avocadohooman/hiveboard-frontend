import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  searchFollower: any;
  fire_groups: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getGroups().subscribe(data =>{
      this.fire_groups = data;
    })
  }
}
