import { NgModule } from "@angular/core";
import { PlaceDetailsComponent } from "./place-details/place-details.component";
import { PlaceEditComponent } from "./place-edit/place-edit.component";
import { PlaceItemComponent } from "./place-list/place-item/place-item.component";
import { PlaceListComponent } from "./place-list/place-list.component";
import { PlacesComponent } from "./places.component";
import { DefaultPlaceDetailsComponent } from "./default-place-details/default-place-details.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PlacesRoutingModule } from "./places-routing.module";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { placesReducers } from "./store/places.reducers";
import { EffectsModule } from "@ngrx/effects";
import { PlacesEffects } from "./store/places.effects";

@NgModule({
    declarations: [
        PlaceDetailsComponent,
        PlaceEditComponent,
        PlaceItemComponent,
        PlaceListComponent,
        PlacesComponent,
        DefaultPlaceDetailsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PlacesRoutingModule,
        SharedModule,
        StoreModule.forFeature('places',placesReducers),
        EffectsModule.forFeature([PlacesEffects])
    ]
})
export class PlacesModule{

}