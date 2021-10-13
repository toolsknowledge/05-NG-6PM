import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesEx';

  uname:string = "";
  upwd:string = "";


  login(){
      if(this.uname === "ashokit" && this.upwd === "ashokit"){
        alert("Login Success");
      }else{
        alert("Login Fail");
      }
  }



  products:any[] = [
      {"p_id":111,
       "p_name":"shirt1",
       "p_cost":10000,
       "p_image":"https://mernclassbucket.s3.us-east-2.amazonaws.com/p1.jpg"},
      {"p_id":222,
      "p_name":"shirt2",
      "p_cost":20000,
      "p_image":"https://mernclassbucket.s3.us-east-2.amazonaws.com/p2.jpg"},
      {"p_id":333,
      "p_name":"shirt3",
      "p_cost":30000,
      "p_image":"https://mernclassbucket.s3.us-east-2.amazonaws.com/p3.jpg"},
      {
        "p_id":444,
       "p_name":"pant1",
       "p_cost":40000,
       "p_image":"https://mernclassbucket.s3.us-east-2.amazonaws.com/p4.jpg"
      },
      {"p_id":555,
      "p_name":"pant2",
      "p_cost":50000,
      "p_image":"https://mernclassbucket.s3.us-east-2.amazonaws.com/p5.jpg"},
      {"p_id":666,
      "p_name":"pant6",
      "p_cost":60000,
      "p_image":"https://mernclassbucket.s3.us-east-2.amazonaws.com/p6.jpg"}
  ];
}
