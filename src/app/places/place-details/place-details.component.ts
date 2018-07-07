import { Component, OnInit} from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from "../places.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  
  selectedPlace: Place;
  
  constructor(private placesService: PlacesService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params: Params) => {
        const selectedPlaceIndex = params['placeIndex'];
        this.selectedPlace = this.placesService.getPlaceAtIndex(selectedPlaceIndex);
      }
    )
  }

  addToDealList(){
    this.placesService.addHotelToDealList(this.selectedPlace.hotels);
  }

}
