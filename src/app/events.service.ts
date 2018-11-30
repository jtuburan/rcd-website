import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _eventsUrl = "http://localhost:8080/api/events";
  constructor( private http: HttpClient ) { }
}
