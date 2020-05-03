import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { AuthGuardService } from './services/auth-guard.service';

const eventRoutes:Routes=[
  {
    path:"",
    component:EventsListComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"newevent",
    component:RegisterEventComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:":id",
    component:EventDetailsComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(eventRoutes)
  ],
  exports:[RouterModule]
})
export class EventsRoutingModule { }
