import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { EventsRoutingModule } from './events-routing.module';
//Components
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RegisterEventComponent } from './register-event/register-event.component';
//Pipes
import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
//Services
import { EventsService } from './services/events.service';

import { AuthInterceptor } from './services/auth-interceptor';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [EventsListComponent, EventDetailsComponent, CapitalCasePipe, FilterByPipe, RegisterEventComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    EventsRoutingModule
  ],
  exports: [EventsListComponent],
  providers: [
    EventsService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class EventsModule { }
