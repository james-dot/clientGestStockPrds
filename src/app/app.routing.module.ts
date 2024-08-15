import { NgModule } from "@angular/core";
import {Router, RouterModule, Routes } from "@angular/router";
import { ProduitComponent } from "./produit/produit.component";
import { DashbordComponent } from "./dashbord/dashbord.component";

 export const appRoutes: Routes =[
        {path : 'produit', component: ProduitComponent},
        {path : 'dashbord', component : DashbordComponent},
        {path : '', redirectTo: '/dashboard', pathMatch: 'full'}//path par default
 ];

 @NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    exports:[Router]
 })
 


 export class AppRoutingModule{

 }