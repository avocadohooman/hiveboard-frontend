import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from 'src/app/http.service';

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
    this.getOne();
  }

  getOne(){
    console.log(this.id);
    this.http.getOne(this.id).subscribe(data =>{
      this.event = data;
    })
  }
}
