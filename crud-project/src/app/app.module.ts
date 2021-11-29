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
    BrowserModule,RouterModule.forRoot([{path:"posts",loadChildren:()=>import("./get-module/module/get.module").then(m=>m.GetModule)},
    {path:"xyz",loadChildren:()=>import("./post-module/module/post.module").then(m=>m.PostModule)},
    {path:"abc",loadChildren:()=>import("./put-module/module/put.module").then(m=>m.PutModule)},
    {path:"",loadChildren:()=>import("./delete-module/module/delete.module").then(m=>m.DeleteModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
