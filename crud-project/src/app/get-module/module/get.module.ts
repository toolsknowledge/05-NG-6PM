import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AlertComponent } from "src/app/common/components/alert-component";
import LoadingComponent from "src/app/common/components/loading.component";
import GetComponent from "../components/get.component";
import GetEffects from "../effects/get.effects";
import { getReducer } from "../reducer/get.reducer";
import GetService from "../service/get.service";

@NgModule({
    declarations:[GetComponent,LoadingComponent,AlertComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:GetComponent}]),
             HttpClientModule,
             EffectsModule.forFeature([GetEffects]),
             StoreModule.forFeature("products",getReducer)],
    providers:[GetService],
    exports:[GetComponent]
})

export class GetModule{}