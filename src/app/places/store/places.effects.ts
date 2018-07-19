import { Effect, Actions } from "@ngrx/effects";
import * as PlacesActions from '../store/places.actions';
import { HttpClient } from "@angular/common/http";
import { Place } from "../place.model";
import { Injectable } from "@angular/core";
import * as fromPlaces from '../store/places.reducers';
import { Store } from "@ngrx/store";
import { withLatestFrom, switchMap, map } from 'rxjs/operators';

@Injectable()
export class PlacesEffects {

    @Effect({ dispatch: false })
    storePlaces = this.action$
        .ofType(PlacesActions.STORE_PLACES)
        .pipe(withLatestFrom(this.store.select('places'))
            , switchMap(
                ([action, state]) => {
                    return this.httpClient.put('https://udemy-ng-http-66fa1.firebaseio.com/places.json', state.places);
                }
            ));

    @Effect()
    fetchPlaces = this.action$.ofType(PlacesActions.FETCH_PLACES)
        .pipe(switchMap(
            (action: PlacesActions.FetchPlaces) => {
                return this.httpClient.get<Place[]>('https://udemy-ng-http-66fa1.firebaseio.com/places.json')
            }
        )
            , map(
                (places: Place[]) => {
                    for (let place of places) {
                        if (!place['hotels']) {
                            place['hotels'] = [];
                        }
                    }
                    return {
                        type: PlacesActions.SET_PLACES,
                        payload: places
                    };
                }
            ));


    constructor(private action$: Actions,
        private httpClient: HttpClient,
        private store: Store<fromPlaces.FeatureState>) { };
}