import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
