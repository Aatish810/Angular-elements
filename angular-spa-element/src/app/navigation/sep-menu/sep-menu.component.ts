import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sep-menu',
  templateUrl: './sep-menu.component.html',
  styleUrls: ['./sep-menu.component.css']
})
export class SepMenuComponent implements OnInit {
  constructor() { }
  logo: string = "Events Portal";
  menuItems: string[]=[
    "Home",
    "Employees",
    "Events",
    "Jph Posts",
    "Register Event",
    "Login"
  ];
  ngOnInit() {
  }

}
