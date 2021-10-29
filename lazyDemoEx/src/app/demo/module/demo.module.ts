import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from '../component/demo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:DemoComponent}])
  ],
  exports:[DemoComponent]
})
export class DemoModule { }
