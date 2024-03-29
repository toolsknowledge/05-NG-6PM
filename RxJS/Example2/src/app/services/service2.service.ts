import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2 {

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
      return this.http.get(`https://gorest.co.in/public/v1/posts`);
  }

}
