import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpringComponent } from './spring.component';

@NgModule({
  declarations: [
    AppComponent,
    SpringComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SpringComponent]
})
export class AppModule { }
