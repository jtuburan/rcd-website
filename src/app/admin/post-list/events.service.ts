import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _postListUrl = "http://localhost:8080/api/postList";//event
  private _postListEventUrl = "http://localhost:8080/api/postListEvent";// special events

  constructor( private http: HttpClient ) { }

  getPostList() {
    return this.http.get<any>(this._postListUrl);
  }

  getPostListEvents() {
    return this.http.get<any>(this._postListEventUrl);
  }
}
