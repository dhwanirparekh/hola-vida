import { Component, OnInit} from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  
  places: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();

  }

}
