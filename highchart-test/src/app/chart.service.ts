import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ChartModel } from "./chart-model";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private _httpClient: HttpClient) { }

  getChartData(url: string): Observable<ChartModel[]> {
    return this._httpClient.get<ChartModel[]>(url);
  }
}
