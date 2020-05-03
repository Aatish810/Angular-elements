import { Component, OnInit } from '@angular/core';

import { Event } from "../models/event";
import { EventsService } from "../services/events.service";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  constructor(private _eventsService: EventsService) {

  }
  title: string = "Events List!";
  subTitle: string = "Published by HR Team!";
  // selectedEvent: Event;
  //selectedEventId: number;
  //childMessage: string = "";
  searchChar: string = "";
  events: Event[] = [];
  ngOnInit(): void {
    this._eventsService.getAllEvents().subscribe(
      data => this.events = data,
      err => console.log(err)
    );
  }
  // onEventSelection(eventId: number): void {
  //   this.selectedEventId = eventId;
  // }
  // onChildMessage(message: string): void {
  //   this.childMessage = message;
  // }
}