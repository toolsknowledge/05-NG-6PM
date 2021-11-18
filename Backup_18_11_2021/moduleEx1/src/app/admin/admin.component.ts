import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {
  msg:string;
  constructor() {
    this.msg = "Wecome to Admin Module";
   }

  ngOnInit(): void {
  }

}
