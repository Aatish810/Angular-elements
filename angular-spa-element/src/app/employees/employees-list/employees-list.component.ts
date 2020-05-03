import { Component } from '@angular/core';

import { Employee } from "../models/employee";

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  constructor() {
    // this.employee = new Employee();
    // this.employee.employeeId = 2389;
    // this.employee.employeeName = "Manish Kaushik";
    // this.employee.city = "New York";
    // this.employee.email = "manish.kaushik@gmail.com";
    // this.employee.phone = "3248-233-234";
  }
  //employee: Employee;
  selectedEmployee: Employee;
  onEmployeeSelection(employee: Employee) {
    this.selectedEmployee = employee;
    console.log(this.selectedEmployee);
  }

  employees: Employee[] = [
    {
      employeeId: 2370,
      employeeName: "Pravinkumar R. D.",
      address: "Suncity, A8/404",
      city: "Pune",
      zipcode: 411051,
      phone: "+91 23892893",
      email: "pravin.r.d@gmail.com",
      skillSets: "Microsoft/JavaScript",
      country: "India",
      avatar: "images/noimage.png"
    },
    {
      employeeId: 2372,
      employeeName: "Manish Kaushik",
      address: "Mooncity, Z8/404",
      city: "Raipur",
      zipcode: 459899,
      phone: "+91 9039039090",
      email: "manish.kaushik@gmail.com",
      skillSets: "DBA",
      country: "India",
      avatar: "images/noimage.png"
    },
    {
      employeeId: 2374,
      employeeName: "Alisha C.",
      address: "Mooncity, B8/404",
      city: "Mumbai",
      zipcode: 510512,
      phone: "+91 30003000",
      email: "alisha.c@gmail.com",
      skillSets: "Java",
      country: "India",
      avatar: "images/noimage.png"
    }
  ];
  title: string = "Welcome To Employees List!";
  subTitle: string = "Core Development Employees";
}
