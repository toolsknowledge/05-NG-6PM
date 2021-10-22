import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormsEx1';
  userDetails:FormGroup;
  address:FormGroup;
  genders:any[];
  countries:string[] = ['india','usa','canada','china','japan'];
  constructor(){
    this.userDetails = new FormGroup({
        uname:new FormControl(null,[Validators.required]),
        email:new FormControl(null,[Validators.required,Validators.email]),
        mobile:new FormControl(null,[Validators.required]),
        gender:new FormControl('female'),
        address:new FormGroup({
            city:new FormControl("Hyderabad",[Validators.required]),
            pincode:new FormControl(null,[Validators.required])
        }),
        country:new FormControl(null),
        subjects:new FormArray([])
        
    });
    this.address = <FormGroup>this.userDetails.controls["address"];
    this.genders = ['male','female'];
  };


  addSubjects():void{
     const control = new FormControl(null);
     (<FormArray>this.userDetails.controls["subjects"]).push(control);
  }


  get subjectsArray():any{
      return this.userDetails.controls['subjects'] as FormArray;
  }

  removeSubject(i:number):any{
      //filter funtion to remove item
  }


  register():void{
      console.log(this.userDetails.value);
  };





}
