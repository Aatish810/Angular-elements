import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepHomeComponent } from './home/sep-home/sep-home.component';

const routes: Routes = [
  {
    path:"",
    component:SepHomeComponent
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "employees",
    loadChildren: () => import("./employees/employees.module").then(m => m.EmployeesModule)
  },
  {
    path: "events",
    loadChildren: () => import("./events/events.module").then(m => m.EventsModule)
  },
  {
    path: "jph",
    loadChildren: () => import("./jph/jph.module").then(m => m.JphModule)
  },
  {
    path: "security",
    loadChildren: () => import("./security/security.module").then(m => m.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }