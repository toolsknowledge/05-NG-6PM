import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RevisionComponent } from './revision.component';

@NgModule({
  declarations: [
    AppComponent,
    RevisionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RevisionComponent]
})
export class AppModule { }
