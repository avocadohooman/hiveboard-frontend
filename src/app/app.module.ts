import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventItemComponent } from './events/events-list/event-item/event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventsDetailComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
