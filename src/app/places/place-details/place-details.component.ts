import { Component, OnInit} from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from "../places.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  
  selectedPlace: Place;
  selectedPlaceIndex: number;
  
  constructor(private placesService: PlacesService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedPlaceIndex = params['placeIndex'];
        this.selectedPlace = this.placesService.getPlaceAtIndex(this.selectedPlaceIndex);
      }
    )
  }

  addToDealList(){
    this.placesService.addHotelToDealList(this.selectedPlace.hotels);
  }

  deleteFromPlaceList(){
    this.placesService.deletePlace(this.selectedPlaceIndex);
    this.router.navigate(['/places']);
  }
}
