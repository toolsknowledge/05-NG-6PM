import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDirDirective } from './my-dir.directive';
import { HelloDirective } from './hello.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    HelloDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
