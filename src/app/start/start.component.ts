import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService, EventWrapper } from '../api/api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {

  @ViewChild ('scrollContent') scrollContent: ElementRef;

    public events: EventWrapper;

  constructor(private apiService: ApiService, private appComponent: AppComponent) { }

  ngOnInit(): void {
	this.appComponent.eventBatch$ = this.apiService.getEvents();
	if (this.appComponent.amountOfEvents <= 0) {
		this.getEvents();
	} else {
        this.events = this.appComponent.eventBatch;
        console.log('START EVENT LIST', this.events);
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
            console.log("DATA EVENT", data, "eventBatch", this.appComponent.eventBatch);
		},
		error: message => {
			console.log('error', message);
		},
		complete: () => {
            this.appComponent.loadingEvents = false;
            this.appComponent.amountOfEvents = this.appComponent.eventBatch.data.length;
            console.log('Amount of Evets', this.appComponent.amountOfEvents);
			this.events = this.appComponent.eventBatch;
		}
    });
  }
}
