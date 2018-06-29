import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {

  @Input() place: Place;
  @Output() selectedPlaceItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onPlaceItemSelection(){
    this.selectedPlaceItem.emit();
  }

}
