import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  list = [];
  constructor(private _eventsService: EventsService, private _route: Router ) { }

  ngOnInit() {
    this._eventsService.getPostList().subscribe(
      res => this.list = res,
      // 
      err => {
        if(err instanceof HttpErrorResponse ) {
          if(err.status === 401) {
            this._route.navigate(['/admin-login'])
          }
        }
      }
    );
  }

}
