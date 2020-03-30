import { EventStruct } from './event_struct.model'
import { EventEmitter } from '@angular/core';

export class EventService {
  eventSelected = new EventEmitter<EventStruct>();

  private events: EventStruct[] = [
    new EventStruct('31/03/2020', 'CV Workshop', 'This workshop is for you if you are about to start working or have been …', 'Hive'),
    new EventStruct('04/04/2020', 'Honey Hackathon', 'This hackathong is something completely new …', 'Honey Hackathon'),
    new EventStruct('04/04/2020', 'Honey Hackathon', 'This hackathong is something completely new …', 'Honey Hackathon')
  ];

  getEvents(){
    return this.events.slice();
  }
}
