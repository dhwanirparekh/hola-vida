import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DealsListComponent } from "./deals-list/deals-list.component";
import { PlacesComponent } from "./places/places.component";
import { PlaceDetailsComponent } from "./places/place-details/place-details.component";
import { DefaultPlaceDetailsComponent } from "./places/default-place-details/default-place-details.component";
import { PlaceEditComponent } from "./places/place-edit/place-edit.component";

const appRoutes: Routes = [
    {path: '' , redirectTo: '/deals', pathMatch: 'full'},
    {path: 'deals' , component: DealsListComponent},
    {path: 'places', component: PlacesComponent, children: [
        {path: '', component: DefaultPlaceDetailsComponent, pathMatch: 'full'},
        {path: 'new', component: PlaceEditComponent},
        {path: ':placeIndex', component: PlaceDetailsComponent},
        {path: ':placeIndex/edit', component: PlaceEditComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}