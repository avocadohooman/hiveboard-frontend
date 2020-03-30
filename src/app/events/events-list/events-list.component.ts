import { Component, OnInit } from '@angular/core';
import { EventStruct } from '../event_struct.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventService]
})
export class EventsListComponent implements OnInit {

  events: EventStruct[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
