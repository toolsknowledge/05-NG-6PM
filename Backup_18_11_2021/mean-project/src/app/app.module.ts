import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import BackendComponent from './components/backend.component';
import DatabaseComponent from './components/database.component';
import UIComponent from './components/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    UIComponent,
    BackendComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UIComponent]
})
export class AppModule { }
