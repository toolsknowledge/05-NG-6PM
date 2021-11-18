import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  var_one:string = "Hello_1";
  var_two:string = "Hello_2";

  constructor() { }

  ngOnInit(): void {
  }

}
