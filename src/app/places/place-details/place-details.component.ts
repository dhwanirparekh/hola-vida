import { Component, OnInit,Input } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from "../places.service";
import { Hotel } from "../../shared/hotel.model";

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  
  @Input() selectedPlace: Place;
  
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
  }

  addToDealList(){
    this.placesService.addHotelToDealList(this.selectedPlace.hotels);
  }

}
