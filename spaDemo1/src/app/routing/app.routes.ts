import { Routes } from "@angular/router";
import { PageoneComponent } from "../pageone.component";
import { PagethreeComponent } from "../pagethree.component";
import { PagetwoComponent } from "../pagetwo.component";

export const appRoutes:Routes = [
    {path:"",component:PageoneComponent},
    {path:"page_two",component:PagetwoComponent},
    {path:"page_three",component:PagethreeComponent}
];