import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,RouterModule.forRoot([{path:"",loadChildren:()=>import("./get-module/module/get.module").then(m=>m.GetModule)},
    {path:"posts",loadChildren:()=>import("./post-module/module/post.module").then(m=>m.PostModule)},
    {path:"update",loadChildren:()=>import("./put-module/module/put.module").then(m=>m.PutModule)},
    {path:"delete",loadChildren:()=>import("./delete-module/module/delete.module").then(m=>m.DeleteModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
