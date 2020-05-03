import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EventForm } from "../models/event-form";

import { EventsService } from "../services/events.service";

@Component({
  selector: 'register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {
  constructor(private _eventsService: EventsService, private _router: Router) { }
  title: string = "New Event Registration Form!";
  newEvent: EventForm = new EventForm();
  ngOnInit() {

  }
  onEventRegistration(e): void {
    e.preventDefault();
    this._eventsService.registerEvent(this.newEvent.sepNewEvent.value).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/events']);
      },
      err => console.log(err)
    );
  }
}
