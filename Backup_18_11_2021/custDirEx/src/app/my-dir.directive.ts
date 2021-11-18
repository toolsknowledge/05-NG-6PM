import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myDir]'
})
export class MyDirDirective {

  @Input() var_one:any;
  @Input() var_two:any;



  constructor(private _el:ElementRef) { }

  @HostListener("mouseenter") onmouseenter(){
      console.log(this._el.nativeElement);
      this._el.nativeElement.style.backgroundColor=this.var_one;
  }

  @HostListener("mouseleave") onmouseleave(){
      console.log(this._el.nativeElement);
      this._el.nativeElement.style.backgroundColor=this.var_two;
  }

}
