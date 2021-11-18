import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  public var_one:string;
  public var_two:string;

  constructor() { 
    this.var_one = "Hello_1";
    this.var_two = "Hello_2";
  }

  ngOnInit(): void {
  }

}
