import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import * as PlacesActions from '../store/places.actions';
import * as fromPlaces from '../store/places.reducers';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  id: number;
  editMode = false;
  placeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromPlaces.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['placeIndex'];
        this.editMode = params['placeIndex'] != null;
        this.initForm();
      }
    );

  }

  private initForm() {

    let vplaceName = '';
    let vimgPath = '';
    let vDescription = '';
    let vhotelList = new FormArray([]);

    if (this.editMode) {

      this.store.select('places')
        .pipe(take(1))
        .subscribe(
          (placesState: fromPlaces.State) => {
            const place = placesState.places[this.id];
            vplaceName = place.name;
            vimgPath = place.imagePath;
            vDescription = place.description;
            if (place['hotels']) {
              for (let hotel of place.hotels) {
                vhotelList.push(new FormGroup({
                  'name': new FormControl(hotel.name, Validators.required),
                  'noOfDeals': new FormControl(hotel.noOfDeals,
                    [Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)])
                }))
              }
            }
          }
        )

    }

    this.placeEditForm = new FormGroup({
      'name': new FormControl(vplaceName, Validators.required),
      'imagePath': new FormControl(vimgPath, Validators.required),
      'description': new FormControl(vDescription, Validators.required),
      'hotels': vhotelList
    });
  }

  onSubmit() {

    if (this.editMode) {
      this.store.dispatch(
        new PlacesActions.UpdatePlace({
          index: this.id,
          place: this.placeEditForm.value
        })
      );

    } else {
      this.store.dispatch(new PlacesActions.AddPlace(this.placeEditForm.value));
    }
    this.onNavigateAway();
  }

  addDeals() {
    (<FormArray>this.placeEditForm.get('hotels')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'noOfDeals': new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  removeDeal(index: number) {
    (<FormArray>this.placeEditForm.get('hotels')).removeAt(index);
  }

  onNavigateAway() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  get placeEditFormHotels() { return <FormArray>this.placeEditForm.get('hotels'); }

}
