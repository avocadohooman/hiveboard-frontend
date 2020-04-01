import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../../../http.service';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  event: Object;
  id : any;

  constructor(private router: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.http.getEvents().subscribe(data => {
      this.event = data;
    });
    this.id = this.router.snapshot.params.id;
  }

}
