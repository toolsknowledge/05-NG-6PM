import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PutComponent } from "../components/put.component";
import { PutEffects } from "../effects/put.effects";
import { putReducer } from "../reducer/put.reducer";
import { PutService } from "../service/put.service";

@NgModule({
    declarations:[PutComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:PutComponent}]),
             HttpClientModule,
             StoreModule.forFeature("update",putReducer),
             EffectsModule.forFeature([PutEffects])],
    providers:[PutService],
    exports:[PutComponent]
})
export class PutModule{}