import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  list = [];
  constructor(private _eventsService: EventsService ) { }

  ngOnInit() {
    this._eventsService.getPostList().subscribe(
      res => this.list = res,
      err => console.log(err)
    );
  }

}
