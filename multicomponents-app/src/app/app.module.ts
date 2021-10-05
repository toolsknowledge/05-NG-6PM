import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendComponent } from './components/backend.component';
import { DatabaseComponent } from './components/database.component';
import { FrontendComponent } from './components/frontend.component';
import { FullstackComponent } from './components/fullstack.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    DatabaseComponent,
    FullstackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FullstackComponent]
})
export class AppModule { }
