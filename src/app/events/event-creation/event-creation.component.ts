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
  begin_at : any;
  end_at: any;
  minDate: Date;

  constructor(private _http: HttpService, private router: Router) {
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }

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
    let begin: string;
    let end: string;
    this.adjustTimezone(this.begin_at, 0);
    this.adjustTimezone(this.end_at, 1);
    begin = moment().toISOString(this.begin_date);
    begin = begin.substr(0, begin.indexOf(":") - 2) + this.begin_at + ":" + begin.substr(12 + this.begin_at.length, begin.length);
    end =  moment().toISOString(this.end_date);
    end = end.substr(0, end.indexOf(":") - 2) + this.end_at + ":" + end.substr(12 + this.end_at.length, end.length);
    let new_event = {
      name: this.name,
      location: this.location,
      description: this.description,
      organiser: this.organiser,
      begin_date: begin,
      end_date: end,
    }
    this._http.addEvent(new_event);
    this.router.navigate(['/']);
  }

  adjustTimezone(time: string, token: number){
    let array = time.split(":");
    let a = parseInt(array[0]);
    if (a >= 3 && a <= 23)
      a = a - 3;
    else if (a >= 0 && a <= 2)
      a = a + 24 - 3;
    let b = a.toString();
    time = b + time.substr(2, time.length);
    (token == 0) ? this.begin_at = time : 0;
    (token == 1) ? this.end_at = time : 0;
  }

  times: Time [] = [
    {value: "07:00", viewValue: "07:00 AM"},
    {value: "07:15", viewValue: "07:15 AM"},
    {value: "07:30", viewValue: "07:30 AM"},
    {value: "07:45", viewValue: "07:45 AM"},
    {value: "08:00", viewValue: "08:00 AM"},
    {value: "08:15", viewValue: "08:15 AM"},
    {value: "08:30", viewValue: "08:30 AM"},
    {value: "08:45", viewValue: "08:45 AM"},
    {value: "09:00", viewValue: "09:00 AM"},
    {value: "09:15", viewValue: "09:15 AM"},
    {value: "09:30", viewValue: "09:30 AM"},
    {value: "09:45", viewValue: "09:45 AM"},
    {value: "10:00", viewValue: "10:00 AM"},
    {value: "10:15", viewValue: "10:15 AM"},
    {value: "10:30", viewValue: "10:30 AM"},
    {value: "10:45", viewValue: "10:45 AM"},
    {value: "11:00", viewValue: "11:00 AM"},
    {value: "11:15", viewValue: "11:15 AM"},
    {value: "11:30", viewValue: "11:30 AM"},
    {value: "11:45", viewValue: "11:45 AM"},
    {value: "12:00", viewValue: "12:00 PM"},
    {value: "12:15", viewValue: "12:15 PM"},
    {value: "12:30", viewValue: "12:30 PM"},
    {value: "12:45", viewValue: "12:45 PM"},
    {value: "13:00", viewValue: "01:00 PM"},
    {value: "13:15", viewValue: "01:15 PM"},
    {value: "13:30", viewValue: "01:30 PM"},
    {value: "13:45", viewValue: "01:45 PM"},
    {value: "14:00", viewValue: "02:00 PM"},
    {value: "14:15", viewValue: "02:15 PM"},
    {value: "14:30", viewValue: "02:30 PM"},
    {value: "14:45", viewValue: "02:45 PM"},
    {value: "15:00", viewValue: "03:00 PM"},
    {value: "15:15", viewValue: "03:15 PM"},
    {value: "15:30", viewValue: "03:30 PM"},
    {value: "15:45", viewValue: "03:45 PM"},
    {value: "16:00", viewValue: "04:00 PM"},
    {value: "16:15", viewValue: "04:15 PM"},
    {value: "16:30", viewValue: "04:30 PM"},
    {value: "16:45", viewValue: "04:45 PM"},
    {value: "17:00", viewValue: "05:00 PM"},
    {value: "17:15", viewValue: "05:15 PM"},
    {value: "17:30", viewValue: "05:30 PM"},
    {value: "17:45", viewValue: "05:45 PM"},
    {value: "18:00", viewValue: "06:00 PM"},
    {value: "18:15", viewValue: "06:15 PM"},
    {value: "18:30", viewValue: "06:30 PM"},
    {value: "18:45", viewValue: "06:45 PM"},
    {value: "19:00", viewValue: "07:00 PM"},
    {value: "19:15", viewValue: "07:15 PM"},
    {value: "19:30", viewValue: "07:30 PM"},
    {value: "19:45", viewValue: "07:45 PM"},
    {value: "20:00", viewValue: "08:00 PM"},
    {value: "20:15", viewValue: "08:15 PM"},
    {value: "20:30", viewValue: "08:30 PM"},
    {value: "02:45", viewValue: "08:45 PM"},
    {value: "21:00", viewValue: "09:00 PM"},
    {value: "21:15", viewValue: "09:15 PM"},
    {value: "21:30", viewValue: "09:30 PM"},
    {value: "21:45", viewValue: "09:45 PM"},
    {value: "22:00", viewValue: "10:00 PM"},
    {value: "22:15", viewValue: "10:15 PM"},
    {value: "22:30", viewValue: "10:30 PM"},
    {value: "22:45", viewValue: "10:45 PM"},
    {value: "23:00", viewValue: "11:00 PM"},
    {value: "23:15", viewValue: "11:15 PM"},
    {value: "23:30", viewValue: "11:30 PM"},
    {value: "23:45", viewValue: "11:45 PM"},
    {value: "00:00", viewValue: "12:00 AM"},
    {value: "00:15", viewValue: "12:15 AM"},
    {value: "00:30", viewValue: "12:30 AM"},
    {value: "00:45", viewValue: "12:45 AM"},
    {value: "01:00", viewValue: "01:00 AM"},
    {value: "01:15", viewValue: "01:15 AM"},
    {value: "01:30", viewValue: "01:30 AM"},
    {value: "01:45", viewValue: "01:45 AM"},
    {value: "02:00", viewValue: "02:00 AM"},
    {value: "02:15", viewValue: "02:15 AM"},
    {value: "02:30", viewValue: "02:30 AM"},
    {value: "02:45", viewValue: "02:45 AM"},
    {value: "03:00", viewValue: "03:00 AM"},
    {value: "03:15", viewValue: "03:15 AM"},
    {value: "03:30", viewValue: "03:30 AM"},
    {value: "03:45", viewValue: "03:45 AM"},
    {value: "04:00", viewValue: "04:00 AM"},
    {value: "04:15", viewValue: "04:15 AM"},
    {value: "04:30", viewValue: "04:30 AM"},
    {value: "04:45", viewValue: "04:45 AM"},
    {value: "05:00", viewValue: "05:00 AM"},
    {value: "05:15", viewValue: "05:15 AM"},
    {value: "05:30", viewValue: "05:30 AM"},
    {value: "05:45", viewValue: "05:45 AM"},
    {value: "06:00", viewValue: "06:00 AM"},
    {value: "06:15", viewValue: "06:15 AM"},
    {value: "06:30", viewValue: "06:30 AM"},
    {value: "06:45", viewValue: "06:45 AM"}
  ]

}
