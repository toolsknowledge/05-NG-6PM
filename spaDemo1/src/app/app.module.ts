import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { PageoneComponent } from './pageone.component';
import { PagetwoComponent } from './pagetwo.component';
import { PagethreeComponent } from './pagethree.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routing/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
