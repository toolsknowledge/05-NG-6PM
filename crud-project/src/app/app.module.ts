import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,RouterModule.forRoot([{path:"",loadChildren:()=>import("./get-module/module/get.module").then(m=>m.GetModule)},
    {path:"posts",loadChildren:()=>import("./post-module/module/post.module").then(m=>m.PostModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
