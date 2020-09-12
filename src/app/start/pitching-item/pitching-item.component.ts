import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api/api.service';
import moment from "moment"; moment().format;


@Component({
  selector: 'app-pitching-item',
  templateUrl: './pitching-item.component.html',
  styleUrls: ['./pitching-item.component.css']
})

export class PitchingItemComponent implements OnInit{

  @Input() pitching_event: any;

  beginAt: string;

  constructor(private _http: ApiService){
  }

  ngOnInit() : void{
    this.beginAt = moment(this.pitching_event.begin_at).format('ddd, MMM D • YYYY @ hh:mm A');
  }

}
