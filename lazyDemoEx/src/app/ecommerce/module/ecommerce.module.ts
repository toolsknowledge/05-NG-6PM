import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from '../component/ecommerce.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EcommerceService } from '../service/ecommerce.service';



@NgModule({
  declarations: [EcommerceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path:"",component:EcommerceComponent}])
  ],
  providers:[EcommerceService],
  exports:[EcommerceComponent]
})
export class EcommerceModule { }
