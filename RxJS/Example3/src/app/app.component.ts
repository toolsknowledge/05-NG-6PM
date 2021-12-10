import { Component } from '@angular/core';
import { interval, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    ngOnInit(){
       let observable1$ = interval(1000);
       let observable2$ = of("a","b","c","d");
       let observable3$ = of("d","e","f","g");

       let observable4$ = new Observable((samba)=>{
          samba.next("AshokIT");
          samba.error("Application Error");
       })


       merge(observable1$,observable2$,observable3$,observable4$).subscribe((posRes)=>{
          console.log(posRes);
       },(errRes)=>{
          console.log(errRes);
       })
    }
}
