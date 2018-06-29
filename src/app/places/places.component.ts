import { Component } from "@angular/core";
import {Place} from "./place.model";

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent{

    showDetailsFor: Place;

    displayPlaceDetails(selectedPlaceItem: Place){
        this.showDetailsFor = selectedPlaceItem;
    }

}
