import { Component } from '@angular/core';
import { Event, User, EventWrapper, ApiService } from './api/api.service';
import { Observable } from 'rxjs';
// tslint:disable: indent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selector = 'events';

  public eventBatch$;
  public eventBatch: EventWrapper;
  public amountOfEvents: number;
  public loadingEvents: boolean;
  public user$;
  public newEvent: boolean;


  constructor(private apiService: ApiService) {
  this.amountOfEvents = 0;
  this.newEvent = false;
	this.loadingEvents = false;
  }

  receiveEvent(feature: string) {
	this.selector = feature;
  }

  getEvents() {
    this.loadingEvents = true;
    console.log('GETTING EVENTS IN APP.COMPONENT');
	  this.eventBatch$ = this.apiService.getEvents();
	  this.eventBatch$.subscribe({
		next: data => {
            this.eventBatch = data;
            console.log("DATA EVENT", data, "Event Batch:", this.eventBatch);
		},
		error: message => {
			console.log('error', message);
		},
		complete: () => {
            this.loadingEvents = false;
            this.amountOfEvents = this.eventBatch.data.length;
            console.log('Amount of Evets', this.amountOfEvents);
		}
    });
  }
}
