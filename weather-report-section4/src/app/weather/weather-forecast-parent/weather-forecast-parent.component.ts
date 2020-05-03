import { Component } from '@angular/core';

@Component({
  selector: 'weather-forecast-parent',
  templateUrl: './weather-forecast-parent.component.html',
  styleUrls: ['./weather-forecast-parent.component.css']
})
export class WeatherForecastParentComponent {

  constructor() { }
  weatherCity: string = "";
  onChange(city: string) {
    this.weatherCity = city;
  }

}
