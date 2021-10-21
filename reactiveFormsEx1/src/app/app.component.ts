import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormsEx1';
  userDetails:FormGroup;
  address:FormGroup;
  constructor(){
    this.userDetails = new FormGroup({
        uname:new FormControl(null,[Validators.required]),
        email:new FormControl(null,[Validators.required,Validators.email]),
        mobile:new FormControl(null,[Validators.required]),
        address:new FormGroup({
            city:new FormControl("Hyderabad",[Validators.required]),
            pincode:new FormControl(null,[Validators.required])
        })
    });
    this.address = <FormGroup>this.userDetails.controls["address"];
  };

  register():void{
      console.log(this.userDetails.value);
  };


}
