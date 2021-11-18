import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagethree',
  templateUrl: './pagethree.component.html',
  styles: [
  ]
})
export class PagethreeComponent implements OnInit {
  var_three:string;
  constructor() { 
    this.var_three = "Page Three !!!";
  }

  ngOnInit(): void {
  }

}
