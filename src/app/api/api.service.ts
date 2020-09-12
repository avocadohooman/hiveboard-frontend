import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// tslint:disable: indent

// EVENTS

export interface EventWrapper {
	api42Error: string;
	mongoError: string;
	data: Event[];
}

export interface Event  {
    id: number; 
    name: string;  // required
    description: string;  // required
    location: string;  // required 
    kind: string;
    max_people: number;
    nbr_subscribers: number;
    begin_at: string;  // required
    end_at: string;  // required
    campus_ids: [
      number
    ];
    cursus_ids: [
      number
    ];
    themes: [
      {
        created_at: string;
        id: number;
        name: string;
        updated_at: string;
	  }];
    waitlist: number;
    prohibition_of_cancellation: number;
    created_at: string;
	updated_at: string;
	hiveboard: boolean;  // required
}

// GROUP INFO

export interface Group {
	id: number;
	name: string;
}

// USER INFO

export interface User {
		id: number;
		email: string;
		login: string;
		first_name: string;
		last_name: string;
		url: string;
		phone: number;
		displayname: string;
		image_url: string;
		staff?: boolean;
		correction_point: number;
		pool_month: string;
		pool_year: string;
		location: number;
		wallet: number;
		groups: [];
		cursus_users: [
		  {
			id: number;
			begin_at: string;
			end_at: number;
			grade: number;
			level: number;
			skills: [];
			cursus_id: number;
			has_coalition: boolean;
			user: {
			  id: number;
			  login: string;
			  url: string;
			};
			cursus: {
			  id: number;
			  created_at: string;
			  name: string;
			  slug: string;
			}
		  }
		];
		projects_users: [];
		languages_users: [
		  {
			id: number;
			language_id: number;
			user_id: number;
			position: number;
			created_at: string;
		  }
		];
		achievements: [];
		titles: [];
		titles_users: [];
		partnerships: [];
		patroned: [
		  {
			id: number;
			user_id: number;
			godfather_id: number;
			ongoing: boolean;
			created_at: string;
			updated_at: string;
		  }
		];
		patroning: [];
		expertises_users: [
		  {
			id: number;
			expertise_id: number;
			interested: boolean;
			value: number;
			contact_me: boolean;
			created_at: string;
			user_id: number;
		  }
		];
		campus: [
		  {
			id: number;
			name: string;
			time_zone: string;
			language: {
			  id: number;
			  name: string;
			  identifier: string;
			  created_at: string;
			  updated_at: string;
			};
			users_count: number;
			vogsphere_id: number;
		  }
		];
		campus_users: [
		  {
			id: number;
			user_id: number;
			campus_id: number;
			is_primary: boolean;
		  }
		];
}

@Injectable({
    providedIn: 'root'
})

export class ApiService {

  private baseURL = 'http://localhost:3000/api/events/';
  private userURL = 'http://localhost:3000/api/user/';

  constructor(private http: HttpClient) {}

  getEvents() {
    console.log('Calling getEvents() API');
    return this.http.get(this.baseURL);
  }

  getOne(id: any) {
    return this.http.get(this.baseURL + id);
  }

  createEvent() {
	console.log('Calling createEvents()');
	const body = {};
	const url = this.baseURL;
	console.log('URL: ', url);
    return this.http.post(url, body);
  }
}
