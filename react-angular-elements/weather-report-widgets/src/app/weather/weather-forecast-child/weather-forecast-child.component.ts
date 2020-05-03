import { Component, OnChanges, Input } from '@angular/core';

import { WeatherReportService } from '../../weather-report.service';

@Component({
  selector: 'weather-forecast-child',
  templateUrl: './weather-forecast-child.component.html',
  styleUrls: ['./weather-forecast-child.component.css']
})
export class WeatherForecastChildComponent implements OnChanges {
  constructor(private _weatherReportService: WeatherReportService) { }
  @Input() city: string = "";
  report: any = null;
  error: any = null;
  ngOnChanges() {
    this.report = null;
    this.error = null;
    this._weatherReportService.getForecastWeather(this.city).subscribe(
      data => {
        this.report = data;
        console.log(this.report.list);
      },
      err => this.error = err
    );
  }
  getTime(value: number) {
    let d: Date = new Date(value * 1000);
    let hr: any = d.getUTCHours();
    let mi: any = d.getUTCMinutes();
    if (hr.toString().length == 1) {
      hr = `0${d.getUTCHours()}`
    }
    if (mi.toString().length == 1) {
      mi = `0${d.getUTCMinutes()}`
    }
    return `${hr}:${mi}`;
  }
}
