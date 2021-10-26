import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HrModule } from './hr/hr/hr.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"",loadChildren:()=>import("./customer/customer.module").then(posRes=>posRes.CustomerModule)},
      {path:"bank",loadChildren:()=>import("./bank/bank.module").then(posRes=>posRes.BankModule)},
      {path:"admin",loadChildren:()=>import("./admin/admin.module").then(posRes=>posRes.AdminModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
