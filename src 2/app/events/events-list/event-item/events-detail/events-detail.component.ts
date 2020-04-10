import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from 'src/app/http.service';
import moment from "moment"; moment().format;

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  id : any;
  event: any;

  constructor(private router: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    console.log(this.id);
    this.getOne();
    // this.getOneFire();
  }

  getOne(){
    this.http.getOne(this.id).subscribe(data =>{
      this.event = data;
      this.event.begin_at = moment(this.event.begin_at).format('ddd, MMM D @ hh:mm A');
    })
  }

  // getOneFire(){
  //   this.http.getOneFire(this.id).subscribe(data =>{
  //     this.event = data;
  //     console.log(data);
  //   })
  // }
}
