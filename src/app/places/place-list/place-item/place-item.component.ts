import { Component, OnInit, Input} from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {

  @Input() place: Place;
  
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
  }

  onPlaceItemSelection(){
    this.placesService.placeSelected.emit(this.place);
  }

}
