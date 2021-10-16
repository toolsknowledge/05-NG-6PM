import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective {

  constructor(private _templateRef:TemplateRef<any>,
             private _viewContainerRef:ViewContainerRef) { }

  @Input() set hello(flag:boolean){
    if(flag){
       this._viewContainerRef.createEmbeddedView(this._templateRef)
    }else{
      this._viewContainerRef.clear();
    }
  }



}
