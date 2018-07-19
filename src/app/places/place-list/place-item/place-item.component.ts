import { Component, OnInit, Input} from '@angular/core';
import { Place } from '../../place.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent implements OnInit {

  @Input() place: Place;
  @Input() placeItemIndex: number;
  
  constructor() { }

  ngOnInit() {
  }

}
