import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData(data:any){
    
    console.log(data);
  }

}
