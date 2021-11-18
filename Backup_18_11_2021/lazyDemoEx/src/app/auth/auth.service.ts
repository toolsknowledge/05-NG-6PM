import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  canLoad():boolean{
      return confirm(`do you want to enter into ecommerce module ??`);
  }


}
