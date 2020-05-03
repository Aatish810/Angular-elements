import { Component, OnChanges, Input } from '@angular/core';

import { WeatherReportService } from '../../weather-report.service';

@Component({
  selector: 'weather-report-child',
  templateUrl: './weather-report-child.component.html',
  styleUrls: ['./weather-report-child.component.css']
})
export class WeatherReportChildComponent implements OnChanges{
  constructor(private _weatherReportService:WeatherReportService) { }
  @Input() city: string = "";
  report: any = null;
  sunset: string = "";
  sunrise: string = "";
  error: any = null;

  ngOnChanges(): void {
    this._weatherReportService.getCurrentWeather(this.city).subscribe(
      data => {
        this.report = data;

        this.sunrise = this.getSunSetRiseTime(this.report.sys.sunrise);
        this.sunset = this.getSunSetRiseTime(this.report.sys.sunset);
      },
      err => this.error = err
    );
  }

  private getSunSetRiseTime(value: number) {
    let d: Date = new Date(value * 1000);
    return `${d.getHours()}:${d.getMinutes()}`;
  }
}
