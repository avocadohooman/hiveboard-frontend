import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router'
import moment from "moment"; moment().format;

interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})

export class EventCreationComponent implements OnInit {

  myControl = new FormControl();
  options: string [] = ["Honey", "Hexagon", "Hive"];
  today_date: string;
  today_time: string;
  value: string;
  filteredOptions: Observable<string[]>;
  name: any;
  begin_date: any;
  end_date: any;
  organiser: any;
  description: any;
  location: any;
  id: any;
  begin_at : any;
  end_at: any;

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.today_date =  moment(Date.now()).format('MMM D, YYYY');
      this.today_time = moment(Date.now()).format('hh:mm A');
      const start = moment(Date.now());
      const remainder = 15 - (start.minute() % 15);
      this.today_time = moment(start).add(remainder, "minutes").format("hh:mm A");
      this.begin_at = this.today_time;
      this.end_at = this.today_time;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onAddSubmit(){
    let new_event = {
      name: this.name,
      location: this.location,
      description: this.description,
      organiser: this.organiser,
      // id: this.id = '_' + Math.random().toString(10).substr(2, 4),
      begin_date: this.begin_date,
      end_date: this.end_date,
      begin_at: this.begin_at,
      end_at: this.end_at
    }
    console.log(new_event);
    this._http.addEvent(new_event);
    this.router.navigate(['/']);
  }
  times: Time [] = [
    {value: "00:00 AM", viewValue: "00:00 AM"},
    {value: "00:15 AM", viewValue: "00:15 AM"},
    {value: "00:30 AM", viewValue: "00:30 AM"},
    {value: "00:45 AM", viewValue: "00:45 AM"},
    {value: "01:00 AM", viewValue: "01:00 AM"},
    {value: "01:15 AM", viewValue: "01:15 AM"},
    {value: "01:30 AM", viewValue: "01:30 AM"},
    {value: "01:45 AM", viewValue: "01:45 AM"},
    {value: "02:00 AM", viewValue: "02:00 AM"},
    {value: "02:15 AM", viewValue: "02:15 AM"},
    {value: "02:30 AM", viewValue: "02:30 AM"},
    {value: "02:45 AM", viewValue: "02:45 AM"},
    {value: "03:00 AM", viewValue: "03:00 AM"},
    {value: "03:15 AM", viewValue: "03:15 AM"},
    {value: "03:30 AM", viewValue: "03:30 AM"},
    {value: "03:45 AM", viewValue: "03:45 AM"},
    {value: "04:00 AM", viewValue: "04:00 AM"},
    {value: "04:15 AM", viewValue: "04:15 AM"},
    {value: "04:30 AM", viewValue: "04:30 AM"},
    {value: "04:45 AM", viewValue: "04:45 AM"},
    {value: "05:00 AM", viewValue: "05:00 AM"},
    {value: "05:15 AM", viewValue: "05:15 AM"},
    {value: "05:30 AM", viewValue: "05:30 AM"},
    {value: "05:45 AM", viewValue: "05:45 AM"},
    {value: "06:00 AM", viewValue: "06:00 AM"},
    {value: "06:15 AM", viewValue: "06:15 AM"},
    {value: "06:30 AM", viewValue: "06:30 AM"},
    {value: "06:45 AM", viewValue: "06:45 AM"},
    {value: "07:00 AM", viewValue: "07:00 AM"},
    {value: "07:15 AM", viewValue: "07:15 AM"},
    {value: "07:30 AM", viewValue: "07:30 AM"},
    {value: "07:45 AM", viewValue: "07:45 AM"},
    {value: "08:00 AM", viewValue: "08:00 AM"},
    {value: "08:15 AM", viewValue: "08:15 AM"},
    {value: "08:30 AM", viewValue: "08:30 AM"},
    {value: "08:45 AM", viewValue: "08:45 AM"},
    {value: "09:00 AM", viewValue: "09:00 AM"},
    {value: "09:15 AM", viewValue: "09:15 AM"},
    {value: "09:30 AM", viewValue: "09:30 AM"},
    {value: "09:45 AM", viewValue: "09:45 AM"},
    {value: "10:00 AM", viewValue: "10:00 AM"},
    {value: "10:15 AM", viewValue: "10:15 AM"},
    {value: "10:30 AM", viewValue: "10:30 AM"},
    {value: "10:45 AM", viewValue: "10:45 AM"},
    {value: "11:00 AM", viewValue: "11:00 AM"},
    {value: "11:15 AM", viewValue: "11:15 AM"},
    {value: "11:30 AM", viewValue: "11:30 AM"},
    {value: "11:45 AM", viewValue: "11:45 AM"},
    {value: "00:15 PM", viewValue: "00:15 PM"},
    {value: "00:30 PM", viewValue: "00:30 PM"},
    {value: "00:45 PM", viewValue: "00:45 PM"},
    {value: "01:00 PM", viewValue: "01:00 PM"},
    {value: "01:15 PM", viewValue: "01:15 PM"},
    {value: "01:30 PM", viewValue: "01:30 PM"},
    {value: "01:45 PM", viewValue: "01:45 PM"},
    {value: "02:00 PM", viewValue: "02:00 PM"},
    {value: "02:15 PM", viewValue: "02:15 PM"},
    {value: "02:30 PM", viewValue: "02:30 PM"},
    {value: "02:45 PM", viewValue: "02:45 PM"},
    {value: "03:00 PM", viewValue: "03:00 PM"},
    {value: "03:15 PM", viewValue: "03:15 PM"},
    {value: "03:30 PM", viewValue: "03:30 PM"},
    {value: "03:45 PM", viewValue: "03:45 PM"},
    {value: "04:00 PM", viewValue: "04:00 PM"},
    {value: "04:15 PM", viewValue: "04:15 PM"},
    {value: "04:30 PM", viewValue: "04:30 PM"},
    {value: "04:45 PM", viewValue: "04:45 PM"},
    {value: "05:00 PM", viewValue: "05:00 PM"},
    {value: "05:15 PM", viewValue: "05:15 PM"},
    {value: "05:30 PM", viewValue: "05:30 PM"},
    {value: "05:45 PM", viewValue: "05:45 PM"},
    {value: "06:00 PM", viewValue: "06:00 PM"},
    {value: "06:15 PM", viewValue: "06:15 PM"},
    {value: "06:30 PM", viewValue: "06:30 PM"},
    {value: "06:45 PM", viewValue: "06:45 PM"},
    {value: "07:00 PM", viewValue: "07:00 PM"},
    {value: "07:15 PM", viewValue: "07:15 PM"},
    {value: "07:30 PM", viewValue: "07:30 PM"},
    {value: "07:45 PM", viewValue: "07:45 PM"},
    {value: "08:00 PM", viewValue: "08:00 PM"},
    {value: "08:15 PM", viewValue: "08:15 PM"},
    {value: "08:30 PM", viewValue: "08:30 PM"},
    {value: "08:45 PM", viewValue: "08:45 PM"},
    {value: "09:00 PM", viewValue: "09:00 PM"},
    {value: "09:15 PM", viewValue: "09:15 PM"},
    {value: "09:30 PM", viewValue: "09:30 PM"},
    {value: "09:45 PM", viewValue: "09:45 PM"},
    {value: "10:00 PM", viewValue: "10:00 PM"},
    {value: "10:15 PM", viewValue: "10:15 PM"},
    {value: "10:30 PM", viewValue: "10:30 PM"},
    {value: "10:45 PM", viewValue: "10:45 PM"},
    {value: "11:00 PM", viewValue: "11:00 PM"},
    {value: "11:15 PM", viewValue: "11:15 PM"},
    {value: "11:30 PM", viewValue: "11:30 PM"},
    {value: "11:45 PM", viewValue: "11:45 PM"}]

}
