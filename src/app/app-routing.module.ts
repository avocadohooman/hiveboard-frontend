import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsDetailComponent } from './events/events-list/event-item/events-detail/events-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventCreationComponent } from './events/event-creation/event-creation.component';

const routes: Routes = [
  {path: '', component: EventsListComponent},
  {path: 'event/:id', component: EventsDetailComponent},
  {path: 'new-event', component: EventCreationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
