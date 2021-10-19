import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childone',
  templateUrl: './childone.component.html',
  styles: [
  ]
})
export class ChildoneComponent implements OnInit {
  var_one:string;
  constructor() { 
    this.var_one = "Child One !!!";
  }

  ngOnInit(): void {
  }

}
