import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PostComponent } from "../component/post.component";
import { postEffects } from "../effects/post.effect";
import { postReducer } from "../reducer/post.reducer";
import { PostService } from "../service/post.service";
@NgModule({
    declarations:[PostComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:PostComponent}]),
             StoreModule.forFeature("post",postReducer),
             EffectsModule.forFeature([postEffects])],
    providers:[PostService],
    exports:[PostComponent]
})
export class PostModule{}