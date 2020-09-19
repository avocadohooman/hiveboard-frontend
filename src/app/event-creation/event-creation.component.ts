import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService, Event } from '../api/api.service';
import { Router } from '@angular/router'
import moment from "moment";import { AppComponent } from '../app.component';
import { ThrowStmt } from '@angular/compiler';

 moment().format;

interface Time {
  value: string;
  viewValue: string;
  score: number;
}

interface Groups {
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
  groups: Groups [] = [
	  {value: "bouldering", viewValue: "Bouldering"},
	  {value: "esports", viewValue: "eSports"},
	  {value: "dnd", viewValue: "DnD"},
	  {value: "honey", viewValue: "Honey"},
	  {value: "ping-pong", viewValue: "Ping Pong"}];
	times: Time [] = [
		{value: "07:00", viewValue: "07:00 AM", score: 0},
		{value: "07:15", viewValue: "07:15 AM", score: 0},
		{value: "07:30", viewValue: "07:30 AM", score: 0},
		{value: "07:45", viewValue: "07:45 AM", score: 0},
		{value: "08:00", viewValue: "08:00 AM", score: 0},
		{value: "08:15", viewValue: "08:15 AM", score: 0},
		{value: "08:30", viewValue: "08:30 AM", score: 0},
		{value: "08:45", viewValue: "08:45 AM", score: 0},
		{value: "09:00", viewValue: "09:00 AM", score: 0},
		{value: "09:15", viewValue: "09:15 AM", score: 0},
		{value: "09:30", viewValue: "09:30 AM", score: 0},
		{value: "09:45", viewValue: "09:45 AM", score: 0},
		{value: "10:00", viewValue: "10:00 AM", score: 0},
		{value: "10:15", viewValue: "10:15 AM", score: 0},
		{value: "10:30", viewValue: "10:30 AM", score: 0},
		{value: "10:45", viewValue: "10:45 AM", score: 0},
		{value: "11:00", viewValue: "11:00 AM", score: 0},
		{value: "11:15", viewValue: "11:15 AM", score: 0},
		{value: "11:30", viewValue: "11:30 AM", score: 0},
		{value: "11:45", viewValue: "11:45 AM", score: 0},
		{value: "12:00", viewValue: "12:00 PM", score: 0},
		{value: "12:15", viewValue: "12:15 PM", score: 0},
		{value: "12:30", viewValue: "12:30 PM", score: 0},
		{value: "12:45", viewValue: "12:45 PM", score: 0},
		{value: "13:00", viewValue: "01:00 PM", score: 0},
		{value: "13:15", viewValue: "01:15 PM", score: 0},
		{value: "13:30", viewValue: "01:30 PM", score: 0},
		{value: "13:45", viewValue: "01:45 PM", score: 0},
		{value: "14:00", viewValue: "02:00 PM", score: 0},
		{value: "14:15", viewValue: "02:15 PM", score: 0},
		{value: "14:30", viewValue: "02:30 PM", score: 0},
		{value: "14:45", viewValue: "02:45 PM", score: 0},
		{value: "15:00", viewValue: "03:00 PM", score: 0},
		{value: "15:15", viewValue: "03:15 PM", score: 0},
		{value: "15:30", viewValue: "03:30 PM", score: 0},
		{value: "15:45", viewValue: "03:45 PM", score: 0},
		{value: "16:00", viewValue: "04:00 PM", score: 0},
		{value: "16:15", viewValue: "04:15 PM", score: 0},
		{value: "16:30", viewValue: "04:30 PM", score: 0},
		{value: "16:45", viewValue: "04:45 PM", score: 0},
		{value: "17:00", viewValue: "05:00 PM", score: 0},
		{value: "17:15", viewValue: "05:15 PM", score: 0},
		{value: "17:30", viewValue: "05:30 PM", score: 0},
		{value: "17:45", viewValue: "05:45 PM", score: 0},
		{value: "18:00", viewValue: "06:00 PM", score: 0},
		{value: "18:15", viewValue: "06:15 PM", score: 0},
		{value: "18:30", viewValue: "06:30 PM", score: 0},
		{value: "18:45", viewValue: "06:45 PM", score: 0},
		{value: "19:00", viewValue: "07:00 PM", score: 0},
		{value: "19:15", viewValue: "07:15 PM", score: 0},
		{value: "19:30", viewValue: "07:30 PM", score: 0},
		{value: "19:45", viewValue: "07:45 PM", score: 0},
		{value: "20:00", viewValue: "08:00 PM", score: 0},
		{value: "20:15", viewValue: "08:15 PM", score: 0},
		{value: "20:30", viewValue: "08:30 PM", score: 0},
		{value: "02:45", viewValue: "08:45 PM", score: 0},
		{value: "21:00", viewValue: "09:00 PM", score: 0},
		{value: "21:15", viewValue: "09:15 PM", score: 0},
		{value: "21:30", viewValue: "09:30 PM", score: 0},
		{value: "21:45", viewValue: "09:45 PM", score: 0},
		{value: "22:00", viewValue: "10:00 PM", score: 0},
		{value: "22:15", viewValue: "10:15 PM", score: 0},
		{value: "22:30", viewValue: "10:30 PM", score: 0},
		{value: "22:45", viewValue: "10:45 PM", score: 0},
		{value: "23:00", viewValue: "11:00 PM", score: 0},
		{value: "23:15", viewValue: "11:15 PM", score: 0},
		{value: "23:30", viewValue: "11:30 PM", score: 0},
		{value: "23:45", viewValue: "11:45 PM", score: 0},
		{value: "00:00", viewValue: "12:00 AM", score: 0},
		{value: "00:15", viewValue: "12:15 AM", score: 0},
		{value: "00:30", viewValue: "12:30 AM", score: 0},
		{value: "00:45", viewValue: "12:45 AM", score: 0},
		{value: "01:00", viewValue: "01:00 AM", score: 0},
		{value: "01:15", viewValue: "01:15 AM", score: 0},
		{value: "01:30", viewValue: "01:30 AM", score: 0},
		{value: "01:45", viewValue: "01:45 AM", score: 0},
		{value: "02:00", viewValue: "02:00 AM", score: 0},
		{value: "02:15", viewValue: "02:15 AM", score: 0},
		{value: "02:30", viewValue: "02:30 AM", score: 0},
		{value: "02:45", viewValue: "02:45 AM", score: 0},
		{value: "03:00", viewValue: "03:00 AM", score: 0},
		{value: "03:15", viewValue: "03:15 AM", score: 0},
		{value: "03:30", viewValue: "03:30 AM", score: 0},
		{value: "03:45", viewValue: "03:45 AM", score: 0},
		{value: "04:00", viewValue: "04:00 AM", score: 0},
		{value: "04:15", viewValue: "04:15 AM", score: 0},
		{value: "04:30", viewValue: "04:30 AM", score: 0},
		{value: "04:45", viewValue: "04:45 AM", score: 0},
		{value: "05:00", viewValue: "05:00 AM", score: 0},
		{value: "05:15", viewValue: "05:15 AM", score: 0},
		{value: "05:30", viewValue: "05:30 AM", score: 0},
		{value: "05:45", viewValue: "05:45 AM", score: 0},
		{value: "06:00", viewValue: "06:00 AM", score: 0},
		{value: "06:15", viewValue: "06:15 AM", score: 0},
		{value: "06:30", viewValue: "06:30 AM", score: 0},
		{value: "06:45", viewValue: "06:45 AM", score: 0}
	  ];
  selectedGroup: string;
  today_date: string;
  today_time: string;
  filteredOptions: Observable<string[]>;
  eventTitle: string;
  eventLocation: string;
  startDate: any;
  errorDate: boolean;
  errorStartTime: boolean;
  errorStartDate: boolean;
  errorStartTimeTwo: boolean;
  startTime: Time;
  endDate: any;
  endTime: Time;
  group: string;
  errorGroup: boolean;
  description: string;
  minDate: Date;
  newEvent: Event;
  

  constructor(private apiService: ApiService, private router: Router, private appComponent: AppComponent ) {
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
	this.minDate = new Date(currentYear, currentMonth, currentDay);
	this.selectedGroup = "";
	this.today_date = "";
	this.today_time = "";
	this.eventTitle = "";
	this.eventLocation = "";
	this.startDate = "";
	this.startTime = {} as Time;
	this.endDate = "";
	this.endTime = {} as Time;
	this.group = "";
	this.description = "";
	this.newEvent = {} as Event;
	this.errorStartTime = false;
	this.errorStartTimeTwo = false;
	this.errorStartDate = false;
  }

  ngOnInit() {
      this.today_date =  moment(Date.now()).format('MMM D, YYYY');
      this.today_time = moment(Date.now()).format('HH:MM');
      const start = moment(Date.now());
      const remainder = 15 - (start.minute() % 15);
      this.today_time = moment(start).add(remainder, "minutes").format("HH:MM");
	  let i = 0;
	  while (i < this.times.length) {
		  this.times[i].score = i;
		  i++;
	  }
	  let currentTimeArray: Array<string> = [];
	  currentTimeArray = this.today_time.split(":");
	  console.log("currentTime Array", currentTimeArray);
	  let currentTimeValueHour = parseInt(currentTimeArray[0]);
	  let currentTimeValueMinute = parseInt(currentTimeArray[1])
	  console.log("currentTimeValue", currentTimeValueHour, currentTimeValueMinute);
  }

  onAddSubmit(){
	this.errorDate = false;
	this.errorGroup = false;
	this.errorStartDate = false;
	this.errorStartTime = false;
	console.log("today Date", this.today_date, "start date", this.startDate, "end Date", this.endDate);
	if (this.checkInput() === 1) {
		let begin: string;
		let end: string;
		this.adjustTimezone(this.startTime.value, 0);
		this.adjustTimezone(this.endTime.value, 1);
		console.log("today Date", this.today_date, "start date", this.startDate, "end Date", this.endDate);
		if (this.startTime.value.length < 5) {
			this.startTime.value = '0' + this.startTime.value;
		}
		if (this.endTime.value.length < 5) {
			this.endTime.value = '0' + this.endTime.value;
		}
		console.log("After succesful check", this.startTime.value, this.startTime.value.length, this.endTime.value, this.endTime.value.length);
		begin = moment(this.startDate).toISOString(true);
		console.log("Begin", begin);
		begin = begin.substr(0, begin.indexOf(":") - 2) + this.startTime.value + ":" + begin.substr(12 + this.startTime.value.length, begin.length);
		end =  moment(this.endDate).toISOString(true);
		console.log("End", end);
		end = end.substr(0, end.indexOf(":") - 2) + this.endTime.value + ":" + end.substr(12 + this.endTime.value.length, end.length);	
		this.newEvent.name = this.eventTitle;
		this.newEvent.location = this.eventLocation;
		this.newEvent.begin_at = begin;
		this.newEvent.end_at = end;
		this.newEvent.description = this.description;
		console.log("New Event", this.newEvent);
		if (this.postRequest(this.newEvent) === 1) {
			// console.log("New Event with ID", this.newEvent.id);
			// this.appComponent.eventBatch.data.push(this.newEvent);
			// this.router.navigate(['/']);
			this.appComponent.getEvents();
			setTimeout(() => {
				this.router.navigate(['/']);
			}, 200);
		} else {
			console.log("Post Error");
		}

	} else {
		console.log("error");
	}
  }

  checkInput():number {
	let error: boolean = false;
	let currentTimeArray: Array<string> = [];
	let currentTimeValueHour: number;
	let currentTimeValueMinute: number;
	let startTimeArray: Array<string> = [];
	let startTimeValueHour: number;
	let startTimeValueMinute: number;
	if (this.today_time && this.startTime) {
		currentTimeArray = this.today_time.split(":");
		startTimeArray = this.startTime.value.split(":");
		currentTimeValueHour = parseInt(currentTimeArray[0]);
		currentTimeValueMinute = parseInt(currentTimeArray[1])
		startTimeValueHour = parseInt(startTimeArray[0]);
		startTimeValueMinute = parseInt(startTimeArray[1]);
	}
	console.log("currentTimeValue", currentTimeValueHour, currentTimeValueMinute, "starTimeValues", startTimeValueHour, startTimeValueMinute);
	if (!this.eventTitle || this.eventTitle === "Please Choose a Title") {
		this.eventTitle = "Please Choose a Title";
		error = true;
	} 
	if (!this.eventLocation || this.eventLocation === "Please Choose a Location") {
		this.eventLocation = "Please Choose a Location";
		error = true;
	}

	if (!this.startDate || !this.startTime.value || !this.endTime.value || !this.endDate) {
		this.errorDate = true;
		error = true;
	}
	if (this.startTime.score >= this.endTime.score) {
		if (this.endDate <= this.startDate) {
			error = true;
			this.errorStartTime = true;
		}
	}
	if (this.startDate > this.endDate) {
		error = true;
		this.errorStartDate = true;
	}
	if (!this.selectedGroup) {
		error = true;
		this.errorGroup = true;
	}
	if (!this.description || this.description === "Please choose a description") {
		error = true;
		this.description = "Please choose a description";
	}
	if (this.startDate === this.today_date) {
		if (startTimeValueHour < currentTimeValueHour) {
			error = true;
			this.errorStartTimeTwo = true;
		}
		if (startTimeValueHour === currentTimeValueHour) {
			if (startTimeValueMinute < currentTimeValueMinute) {
				error = true;
				this.errorStartTimeTwo = true;
			}
		}
	}
	if (error === true)
		return (0);
	return (1);
}

  postRequest(newEvent: Event) : number {
	this.apiService.createEvent(newEvent).subscribe({
			  next: (data: Event) => {
				  console.log("DATA ID", data.id);
				  this.newEvent.id = data.id;
				  console.log(this.newEvent.id);
				  return (data.id);
			  },
			  error: message => {
				console.log('error: ' + message);
				return (0);
			  },
			  complete: () => {
				  this.appComponent.newEvent = true;
				  return (1);
			  }
	});
	return (1);
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
    (token == 0) ? this.startTime.value = time : 0;
    (token == 1) ? this.endTime.value = time : 0;
  }
}
