import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {

  http_event: Object;
  fire_event: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getEvents().subscribe(data => {
      this.http_event = data;
    });
    // this._http.getFire().subscribe(data=>{
    //   console.log(data);
    //   this.fire_event = data;
    // });
  }
}
