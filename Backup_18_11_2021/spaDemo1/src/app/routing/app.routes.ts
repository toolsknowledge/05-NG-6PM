import { Routes } from "@angular/router";
import { ChildoneComponent } from "../childone.component";
import { ChildthreeComponent } from "../childthree.component";
import { ChildtwoComponent } from "../childtwo.component";
import { PageoneComponent } from "../pageone.component";
import { PagethreeComponent } from "../pagethree.component";
import { PagetwoComponent } from "../pagetwo.component";
import { AuthService } from "../services/auth.service";

export const appRoutes:Routes = [
    {path:"",component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent}],
    canActivate:[AuthService]},
    
    {path:"page_two/:p_id/:p_name/:p_cost",component:PagetwoComponent,children:[{path:"child_two",component:ChildtwoComponent}],
    canDeactivate:[AuthService]},
    
    {path:"page_three",component:PagethreeComponent,children:[{path:"child_three",component:ChildthreeComponent}],
    canActivateChild:[AuthService]}
];