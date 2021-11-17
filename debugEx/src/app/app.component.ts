import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debugEx';
  user_details:any = {"uname":"","email":""};
  users:any=[];
  ngOnInit(){}
  addUser():any{
     this.users.push(this.user_details);
  };
}
