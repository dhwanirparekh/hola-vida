import { Component, OnInit, OnDestroy} from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit, OnDestroy{
  
  places: Place[];
  placeListSubscription: Subscription;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {

    this.placeListSubscription = this.placesService.placeListChanged.subscribe(
      (placelist: Place[]) => {
        this.places = placelist;
      }
    );
    this.places = this.placesService.getPlaces();

  }

  ngOnDestroy(){
    this.placeListSubscription.unsubscribe();
  }
}
