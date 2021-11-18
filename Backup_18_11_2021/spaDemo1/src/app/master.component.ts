import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  p_id:number = 222;
  constructor() { }

  ngOnInit(): void {
  }

}
