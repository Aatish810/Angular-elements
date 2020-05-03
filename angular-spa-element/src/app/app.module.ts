import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";

import { AppRoutingModule } from './app-routing.module';

import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mini-spa', customElement);
  }
}
