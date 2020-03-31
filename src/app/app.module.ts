import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventItemComponent } from './events/events-list/event-item/event-item.component';
import { EventsDetailElementComponent } from './events/events-detail/events-detail-element/events-detail-element.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventsDetailComponent,
    EventItemComponent,
    EventsDetailElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
