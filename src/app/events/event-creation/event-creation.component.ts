import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  myControl = new FormControl();
  options: string [] = ["Honey", "Hexagon", "Hive"];
  value: string;
  filteredOptions: Observable<string[]>;
  name: any;
  organiser: any;
  description: any;
  location: any;
  id: any;
  begin_at: any;

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onAddSubmit(){
    let new_event = {
      name: this.name,
      location: this.location,
      description: this.description,
      organiser: this.organiser,
      id: this.id = '_' + Math.random().toString(10).substr(2, 4),
      begin_at: this.begin_at
    }
    this._http.addEvent(new_event);
    this.router.navigate(['/']);
  }
}
