import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  canActivate():boolean{
    return confirm("do you want to enter into first page ??");
  }


  canDeactivate():boolean{
    return confirm("do you want to exit from second page ??");
  }

  canActivateChild():boolean{
    return confirm("do you want to enter into 3rd child ??");
  }



}
