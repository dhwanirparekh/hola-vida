import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlaces from '../../places/store/places.reducers';
import { Observable } from 'rxjs';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import * as PlacesActions from '../../places/store/places.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromPlaces.FeatureState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSave() {
    this.store.dispatch(new PlacesActions.StorePlaces());
  }

  onFetch() {
    this.store.dispatch(new PlacesActions.FetchPlaces());
  }

  logOut() {
    this.store.dispatch(new AuthActions.LogOut());
  }

}
