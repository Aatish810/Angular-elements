import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ng-highchart-element', customElement);
  }
}
