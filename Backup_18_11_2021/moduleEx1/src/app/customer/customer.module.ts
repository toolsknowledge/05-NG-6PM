import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer.component";
@NgModule({
    declarations:[CustomerComponent],
    imports:[CommonModule,RouterModule.forChild([{
        path:"",component:CustomerComponent
    }])],
    providers:[],
    exports:[CustomerComponent]
})
export class CustomerModule{}