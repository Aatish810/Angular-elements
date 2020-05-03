import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {
  constructor(private _httpClient: HttpClient) { 

  }
  getCurrentWeather(city: string): Observable<any> {
    return this._httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e9ff23a7d31b649fb07927ad98abd7b5`);
  }
  getForecastWeather(city: string): Observable<any> {
    return this._httpClient.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&APPID=e9ff23a7d31b649fb07927ad98abd7b5`)
  }
}