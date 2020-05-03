import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


import { ChartService } from "./chart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _chartService: ChartService) { }
  @Input() title: string = "Highcharts Chart ng Element!";
  Highcharts = Highcharts;
  chartOptions;
  series = [];

  @Input() chartType: string;
  @Input() dataUrl: string;
  @Input() chartTitle: string;
  @Input() yTitle: string;


  ngOnInit(): void {
    this._chartService.getChartData(this.dataUrl).subscribe(
      chartModel => {
        this.series = chartModel;
        this.chartOptions={
          chart:{
            renderTo:"container",
            type:this.chartType
          },
          title:{
            text:this.chartTitle
          },
          xAxis:{
            categories:this.series[0].categories
          },
          yAxis:{
            title:{
              text:this.yTitle
            }
          },
          series:this.series
        }
      }
    )
  }
}
