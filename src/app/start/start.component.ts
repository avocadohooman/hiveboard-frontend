import { Component, OnInit, ViewChild, ElementRef, OnChanges} from '@angular/core';
import { ApiService, EventWrapper, User } from '../api/api.service';
import { AppComponent } from '../app.component';
import moment from "moment";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})

  
  export class StartComponent implements OnInit {

  @ViewChild ('scrollContent') scrollContent: ElementRef;

	public events: EventWrapper;
	public sortedEvents: EventWrapper;
	public searchEvent: string;
	public currentUser: User;

  constructor(private apiService: ApiService, private appComponent: AppComponent) { }

  ngOnInit(): void {
	this.appComponent.getUser();
	this.appComponent.eventBatch$ = this.apiService.getEvents();
	if (this.appComponent.amountOfEvents <= 0 || this.appComponent.newEvent === true) {
		this.getEvents();
		this.appComponent.newEvent = false;
	} else {
		this.sortEvents();
		this.events = this.appComponent.eventBatch;
		console.log('START EVENT LIST', this.events.data);
	}
  }
  
  scrollLeft() {
    this.scrollContent.nativeElement.scrollLeft -= 300;
  }
  scrollRight() {
    this.scrollContent.nativeElement.scrollLeft += 300;
  }

  getEvents() {
	this.appComponent.loadingEvents = true;
	this.appComponent.eventBatch$.subscribe({
		next: data => {
			this.appComponent.eventBatch = data;
			this.sortEvents();
			console.log("DATA EVENT", data, "eventBatch", this.appComponent.eventBatch);
		},
		error: message => {
			console.log('error', message);
		},
		complete: () => {
            this.appComponent.loadingEvents = false;
            this.appComponent.amountOfEvents = this.appComponent.eventBatch.data.length;
            console.log('Amount of Events', this.appComponent.amountOfEvents);
			this.events = this.appComponent.eventBatch;
		}
    });
  }

  sortEvents() {
	this.appComponent.eventBatch.data.sort((a, b) => new Date(b.begin_at).getDate() - new Date(a.begin_at).getDate());
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }