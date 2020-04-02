import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../http.service';
import moment from "moment"; moment().format;

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})

export class EventItemComponent implements OnInit {

  @Input() events: any;
  user: any;
  token = false;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.events.begin_at = moment(this.events.begin_at).format('ddd, MMM D • YYYY @ hh:mm A');
    this.getUser();
  }

  getUser(){
    this.http.getUser().subscribe(data =>{
      this.user = data;
    })
  }

  signUp(){
    this.token = true;
  }
}
