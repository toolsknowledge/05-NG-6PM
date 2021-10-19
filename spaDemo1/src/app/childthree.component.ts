import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: [
  ]
})
export class ChildthreeComponent implements OnInit {
  var_three:string;
  constructor() { 
    this.var_three = "Child Three !!!";
  }

  ngOnInit(): void {
  }

}
