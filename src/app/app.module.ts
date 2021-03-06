import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { EventsDetailComponent } from './start/event-item/events-detail/events-detail.component';
import { EventItemComponent } from './start/event-item/event-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatSelectModule } from '@angular/material/select';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerItemComponent } from './follower-list/follower-item/follower-item.component';
import { FilterPipe } from './filter.pipe';
import { PitchingItemComponent } from './start/pitching-item/pitching-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ApiService } from './api/api.service';
// tslint:disable: indent

@NgModule({
  declarations: [
	AppComponent,
	StartComponent,
    EventsDetailComponent,
    EventItemComponent,
    EventCreationComponent,
    FollowerListComponent,
    FollowerItemComponent,
    FilterPipe,
    PitchingItemComponent,
    UserProfileComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
