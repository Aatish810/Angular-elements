import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import {createCustomElement} from '@angular/elements'

import { AppComponent } from './app.component';
import { ColumnFormatterPipe } from './column-formatter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ColumnFormatterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {

  }

   ngDoBootstrap() {
     const customElement = createCustomElement(AppComponent, {
        injector: this.injector
     })

    customElements.define('ng-table-element', customElement);
   }
}
