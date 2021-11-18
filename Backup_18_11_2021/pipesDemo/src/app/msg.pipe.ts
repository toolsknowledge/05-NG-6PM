import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msg'
})
export class MsgPipe implements PipeTransform {

  transform(arg1: any, ...args: any[]): any {
    //arg1 --- Angular13
    //args[0] ---- To
    //args[1] ---- Welcome
    return args[1]+"  "+args[0]+" "+arg1;
  }

}
