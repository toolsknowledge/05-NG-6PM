import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childtwo',
  templateUrl: './childtwo.component.html',
  styles: [
  ]
})
export class ChildtwoComponent implements OnInit {
  var_one:string;
  constructor() {
    this.var_one = "Child Two !!!";
   }

  ngOnInit(): void {
  }

}
