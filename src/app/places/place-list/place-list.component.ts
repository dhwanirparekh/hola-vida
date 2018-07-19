import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromFeature from '../store/places.reducers';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  placesState: Observable<fromFeature.State>;

  constructor(private store: Store<fromFeature.FeatureState>) { }

  ngOnInit() {
    this.placesState = this.store.select('places');
  }

}
