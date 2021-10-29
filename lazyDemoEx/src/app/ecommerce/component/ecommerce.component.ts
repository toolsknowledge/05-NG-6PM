import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EcommerceModel } from '../model/ecommerce-model';
import { EcommerceService } from '../service/ecommerce.service';

@Component({
  selector: 'products',
  templateUrl: './ecommerce.component.html',
  styles: [
  ]
})
export class EcommerceComponent implements OnInit {

  result:any;

  constructor(private service:EcommerceService) {
    this.result = [];
   }

  ngOnInit(): void {
    this.service.getProducts().subscribe((posRes:EcommerceModel[])=>{
        this.result = posRes;
    },(errRes:HttpErrorResponse)=>{
      console.log(errRes);
    });
  }

}
