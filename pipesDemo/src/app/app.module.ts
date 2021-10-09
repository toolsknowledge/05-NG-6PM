import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { MsgPipe } from './msg.pipe';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    MsgPipe,
    DemoComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
