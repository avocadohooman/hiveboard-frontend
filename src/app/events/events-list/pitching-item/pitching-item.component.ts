import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../http.service';
import moment from "moment"; moment().format;


@Component({
  selector: 'app-pitching-item',
  templateUrl: './pitching-item.component.html',
  styleUrls: ['./pitching-item.component.css']
})

export class PitchingItemComponent implements OnInit{

  @Input() pitching_event: any;

  constructor(private _http: HttpService){
  }

  ngOnInit() : void{
    this.pitching_event.begin_at = moment(this.pitching_event.begin_at).format('ddd, MMM D • YYYY @ hh:mm A');

  }

}
