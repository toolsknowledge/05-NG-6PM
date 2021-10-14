import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'revision',
  templateUrl: './revision.component.html',
  styles: [
  ]
})
export class RevisionComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  obj:any = {"uname":"","upwd":""};
  result:string = "";
  login():any{
    this.result = (this.obj.uname=="admin"&&this.obj.upwd=="admin")?"Login Success":"Login Fail";
  }

  flag:boolean=true;



}
