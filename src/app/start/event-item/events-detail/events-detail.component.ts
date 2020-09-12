import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/api/api.service';
import moment from 'moment'; moment().format;

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  id: number;
  event: any;

  constructor(private router: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
	console.log(this.id);
	console.log(typeof(this.id));
    this.getOne();
  }

  getOne() {
    this.api.getOne(this.id).subscribe(data => {
      this.event = data;
      this.event.begin_at = moment(this.event.begin_at).format('ddd, MMM D @ hh:mm A');
    });
  }
}
