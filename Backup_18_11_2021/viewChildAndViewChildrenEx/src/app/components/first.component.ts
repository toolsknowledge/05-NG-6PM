import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SecondComponent } from './second.component';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  //@ViewChild(SecondComponent) public _second:SecondComponent;

  @ViewChildren(SecondComponent)
  private _second:QueryList<SecondComponent> = new QueryList();

  

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  // changeFn():any{
  //   this._second.var_one = "Welcome_1";
  //   this._second.var_two = "Welcome_2";    
  // }

}
