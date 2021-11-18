import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './bank.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BankComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:BankComponent}])
  ],
  providers:[],
  exports:[BankComponent]
})
export class BankModule { }
