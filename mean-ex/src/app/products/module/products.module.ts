import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "../components/products.component";
import { ProductsService } from "../services/products.service";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:ProductsComponent}])],
    providers:[ProductsService],
    exports:[ProductsComponent]
})
export class ProductsModule{}