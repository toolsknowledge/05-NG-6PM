import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppIntreceptor } from './app.intreceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([{path:"",loadChildren:()=>import("./login/module/login.module").then(m=>m.LoginModule)},
                                        {path:"products",loadChildren:()=>import("./products/module/products.module").then(m=>m.ProductsModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
