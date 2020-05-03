import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { WeatherReportParentComponent } from './weather/weather-report-parent/weather-report-parent.component';
import { WeatherReportChildComponent } from './weather/weather-report-child/weather-report-child.component';
import { WeatherForecastParentComponent } from './weather/weather-forecast-parent/weather-forecast-parent.component';
import { WeatherForecastChildComponent } from './weather/weather-forecast-child/weather-forecast-child.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportParentComponent,
    WeatherReportChildComponent,
    WeatherForecastParentComponent,
    WeatherForecastChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, {
      injector: this.injector
    });

    customElements.define('dom-interaction', customElement);
  }

}
