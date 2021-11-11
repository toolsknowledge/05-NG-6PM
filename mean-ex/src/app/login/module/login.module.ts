import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../components/login.component";
import { LoginService } from "../services/login.service";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule,FormsModule,HttpClientModule,RouterModule.forChild([{path:"",component:LoginComponent}])],
    providers:[LoginService],
    exports:[LoginComponent]
})
export class LoginModule{}