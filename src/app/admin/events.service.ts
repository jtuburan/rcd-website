import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _eventsUrl = "http://localhost:8080/api/events";
  private _SpecialEventsUrl = "http://localhost:8080/api/special";

  constructor( private http: HttpClient ) { }

  getlEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  getEspecialEvents() {
    return this.http.get<any>(this._SpecialEventsUrl);
  }
}
