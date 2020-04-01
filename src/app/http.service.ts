import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseURL = 'http://localhost:3000/api/events/';
  mockJson = '../assets/mock.json';

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get(this.baseURL)
  }
  getOne(id: any){
    return this.http.get(this.baseURL+id);
  }
}
