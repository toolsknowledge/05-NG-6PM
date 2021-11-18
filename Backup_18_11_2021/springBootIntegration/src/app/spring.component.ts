import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpringService } from './spring.service';

@Component({
  selector: 'spring',
  templateUrl: './spring.component.html',
  styles: [
  ]
})
export class SpringComponent implements OnInit {

  result:any;

  constructor(private service:SpringService) { }

  ngOnInit(): void {
      this.service.getProducts().subscribe((posRes)=>{
          this.result = posRes;
      },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
      })
  }

}
