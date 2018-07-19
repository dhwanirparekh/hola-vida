import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as DealListActions from '../../deals-list/deals-list-store/deals-list.actions';
import * as fromPlaces from '../store/places.reducers';
import * as PlacesActions from '../store/places.actions';
import { Observable } from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  selectedPlaceState: Observable<fromPlaces.State>;
  id: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromPlaces.FeatureState>) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['placeIndex'];
        this.selectedPlaceState = this.store.select('places');
      }
    )
  }

  addToDealList() {

    this.store.select('places')
      .pipe(take(1))
      .subscribe((placeState: fromPlaces.State) => {
        this.store.dispatch(new DealListActions
          .AddDeals(placeState.places[this.id].hotels));
      })

  }

  deleteFromPlaceList() {
    this.store.dispatch(new PlacesActions.DeletePlace(this.id));
    this.router.navigate(['/places']);
  }
}
