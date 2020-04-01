import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsDetailComponent } from './events/events-list/event-item/events-detail/events-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';

const routes: Routes = [
  {path: '', component: EventsListComponent},
  {path: 'event/:id', component: EventsDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
