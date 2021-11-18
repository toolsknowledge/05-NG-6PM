import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SecondComponent } from './second.component';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  @ViewChild(SecondComponent) private _second:SecondComponent;
 
  @ViewChild("uname") uname:ElementRef = new ElementRef(null);
  @ViewChild("email") email:ElementRef = new ElementRef(null);




  //@ViewChildren(SecondComponent) private map:QueryList<SecondComponent> = new QueryList();
  
  // private arr:any[];
  // ngAfterViewInit(){
  //   this.arr = this.map.toArray();
  // }


  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){

      this.uname.nativeElement.style.backgroundColor = "green";
      this.email.nativeElement.style.color = "green";


      this._second.var_one = "Welcome_1";
      this._second.var_two = "Welcome_2";
      
      // for(let i:number=0;i<this.arr.length;i++){
      //    if(i==0){
      //      this.arr[i].var_one = "Angular12";
      //      this.arr[i].var_two = "Angular13";
      //    }
      //    if(i==1){
      //     this.arr[i].var_one = "NodeJS";
      //     this.arr[i].var_two = "Deno";
      //   }
      //   if(i==2){
      //     this.arr[i].var_one = "ReactJS With JSX";
      //     this.arr[i].var_two = "ReactJS With TSX";
      //   }
         
      }
}




