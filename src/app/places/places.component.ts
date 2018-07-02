import { Component, OnInit } from "@angular/core";
import { PlacesService } from "./places.service";
import { Place } from "./place.model";

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css'],
    providers: [PlacesService]
    
})
export class PlacesComponent implements OnInit{
   
    showDetailsFor: Place;

    constructor(private placesService: PlacesService){}

    ngOnInit(){
        this.placesService.placeSelected.subscribe(
            (place: Place) => {
                this.showDetailsFor = place;
            }
        )
    }

}
