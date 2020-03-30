import { Component, OnInit, Input } from '@angular/core';
import { EventStruct } from '../../event_struct.model'
import { EventService } from '../../event.service'

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
  providers: [EventService]
})
export class EventItemComponent implements OnInit {
  @Input() event: EventStruct;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.eventSelected.emit(this.event);
    console.log(this.event.title);
  }
}
