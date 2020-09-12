import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsDetailComponent } from './start/event-item/events-detail/events-detail.component';
import { StartComponent } from './start/start.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { PitchingItemComponent } from './start/pitching-item/pitching-item.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'event/:id', component: EventsDetailComponent},
  {path: 'new-event', component: EventCreationComponent},
  {path: 'followers', component: FollowerListComponent},
  {path: 'pitching-stage/:id', component: PitchingItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
