import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { DealsListComponent } from "./deals-list/deals-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'places', loadChildren: './places/places.module#PlacesModule'},
    {path: 'deals' , component: DealsListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}