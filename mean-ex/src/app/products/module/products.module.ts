import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppIntreceptor } from "src/app/app.intreceptor";
import { ProductsComponent } from "../components/products.component";
import { ProductsService } from "../services/products.service";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:ProductsComponent}])],
    providers:[ProductsService,
                {provide:HTTP_INTERCEPTORS,
                useClass:AppIntreceptor,
                multi:true}],
    exports:[ProductsComponent]
})
export class ProductsModule{}