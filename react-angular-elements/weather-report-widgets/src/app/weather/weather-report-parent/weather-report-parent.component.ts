import { Component } from '@angular/core';

@Component({
  selector: 'weather-report-parent',
  templateUrl: './weather-report-parent.component.html',
  styleUrls: ['./weather-report-parent.component.css']
})
export class WeatherReportParentComponent {
  constructor() { }

  weatherCity: string = "";
  
  onChange(city: string) {
    this.weatherCity = city;
  }
}
