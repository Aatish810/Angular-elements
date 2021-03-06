import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EmployeesListComponent } from './employees-list/employees-list.component';

const employeeRoutes: Routes = [
    {
        path:"",
        component:EmployeesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(employeeRoutes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule {

}