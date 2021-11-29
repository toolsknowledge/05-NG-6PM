import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DeleteComponent } from "../component/delete.component";
import { DeleteEffects } from "../effects/delete.effects";
import { deleteReducer } from "../reducer/delete.reducer";
import { DeleteService } from "../services/delete.service";

@NgModule({
    declarations:[DeleteComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:DeleteComponent}]),
             HttpClientModule,
             StoreModule.forFeature("delete-module",deleteReducer),
             EffectsModule.forFeature([DeleteEffects])],
    providers:[DeleteService],
    exports:[DeleteComponent]
})
export class DeleteModule{}