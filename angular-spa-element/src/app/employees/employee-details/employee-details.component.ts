import { Component,Input } from '@angular/core';

import { Employee } from "../models/employee";

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  constructor() { }
  title:string="Details of - ";
  @Input() employee:Employee;
}
