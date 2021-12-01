import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AlertComponent } from "src/app/common/components/alert-component";
import LoadingComponent from "src/app/common/components/loading.component";
import { DeleteEffects } from "src/app/delete-module/effects/delete.effects";
import { deleteReducer } from "src/app/delete-module/reducer/delete.reducer";
import { postEffects } from "src/app/post-module/effects/post.effect";
import { postReducer } from "src/app/post-module/reducer/post.reducer";
import { PutEffects } from "src/app/put-module/effects/put.effects";
import { putReducer } from "src/app/put-module/reducer/put.reducer";
import GetComponent from "../components/get.component";
import GetEffects from "../effects/get.effects";
import { getReducer } from "../reducer/get.reducer";
import GetService from "../service/get.service";

@NgModule({
    declarations:[GetComponent,LoadingComponent,AlertComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:GetComponent}]),
             HttpClientModule,
            EffectsModule.forFeature([GetEffects,postEffects,PutEffects,DeleteEffects]),
            StoreModule.forFeature("all-reducers",{"products":getReducer, "post":postReducer,"update":putReducer,"delete-module":deleteReducer})],
    providers:[GetService],
    exports:[GetComponent]
})

export class GetModule{}