import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database'
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseURL = 'http://localhost:3000/api/events/';
  mockJson = '../assets/mock.json';
  userURL = 'http://localhost:3000/api/user/';
  items: Observable<any[]>;

  constructor(private http: HttpClient, private firestore: AngularFirestore,
    private db: AngularFireDatabase) {
  }

  getEvents(){
    return this.http.get(this.baseURL)
  }

  getGroups(){
    this.items = this.db.list('groups').valueChanges();
    return this.items;
  }

  getOne(id: any){
    return this.http.get(this.baseURL+id);
  }

  getOneFire(id: any){
    return this.db.object('events/' + id);
  }

  getFire(){
    this.items = this.db.list('events').valueChanges();
    return this.items;
  }

  addEvent(new_event: any){
    console.log(new_event);
    firebase.database().ref('events').push(new_event);
  }

  // getUser(){
  //   return this.http.get(this.userURL);
  // }
}
