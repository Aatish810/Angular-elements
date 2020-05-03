import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Event } from "../models/event";

import { EventsService } from "../services/events.service";

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
// export class EventDetailsComponent implements  OnChanges{
export class EventDetailsComponent implements OnInit {
  constructor(private _eventsService: EventsService, private _activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    let eventId: number = Number.parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._eventsService.getEventDetails(eventId).subscribe(
      data => this.event = data,
      err => console.log(err)
    );
  }
  // ngOnChanges(): void {
  //   this._eventsService.getEventDetails(this.eventId).subscribe(
  //     data => this.event = data,
  //     err => console.log(err)
  //   );
  // }
  title: string = "Details of - ";
  //@Input("receivedEventId") eventId: number;
  event: Event;
  //@Output("onMessage") sendMessage: EventEmitter<string> = new EventEmitter<string>();
  // onSendMessage(): void {
  //   this.sendMessage.emit("Thank you for the Event Details!");
  // }
}