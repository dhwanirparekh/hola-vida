import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlacesComponent } from "./places.component";
import { DefaultPlaceDetailsComponent } from "./default-place-details/default-place-details.component";
import { PlaceEditComponent } from "./place-edit/place-edit.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { PlaceDetailsComponent } from "./place-details/place-details.component";

const placeRoutes: Routes = [
    {path: '', component: PlacesComponent, children: [
        {path: '', component: DefaultPlaceDetailsComponent, pathMatch: 'full'},
        {path: 'new', component: PlaceEditComponent, canActivate: [AuthGuard]},
        {path: ':placeIndex', component: PlaceDetailsComponent},
        {path: ':placeIndex/edit', component: PlaceEditComponent, canActivate: [AuthGuard]},
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(placeRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class PlacesRoutingModule{}