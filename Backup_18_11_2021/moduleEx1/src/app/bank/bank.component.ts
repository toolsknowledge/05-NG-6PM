import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styles: [
  ]
})
export class BankComponent implements OnInit {

  msg:string;
  constructor() {
    this.msg = "Welcome to Bank Module";
   }

  ngOnInit(): void {
  }

}
