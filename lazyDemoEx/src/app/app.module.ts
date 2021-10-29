import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
   
    RouterModule.forRoot([{path:"",loadChildren:()=>import("./ecommerce/module/ecommerce.module").then(posRes=>posRes.EcommerceModule),canLoad:[AuthService]},
                           {path:"demo",loadChildren:()=>import("./demo/module/demo.module").then(posRes=>posRes.DemoModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
