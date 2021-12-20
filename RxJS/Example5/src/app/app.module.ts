import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1 } from './Component1';
import { Component2 } from './Component2';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Component1]
})
export class AppModule { }
