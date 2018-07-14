import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  placeIndex: number;
  editMode = false;
  placeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private placeService: PlacesService,
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.placeIndex = params['placeIndex'];
        this.editMode = params['placeIndex'] != null;
        this.initForm();
      }
    );

  }

  private initForm(){

    let vplaceName = '';
    let vimgPath = '';
    let vDescription = '';
    let vhotelList = new FormArray([]); 

    if(this.editMode){
      const place = this.placeService.getPlaceAtIndex(this.placeIndex);
      vplaceName = place.name;
      vimgPath = place.imagePath;
      vDescription = place.description;
      if(place['hotels']){
        for (let hotel of place.hotels){
          vhotelList.push(new FormGroup({
            'name': new FormControl(hotel.name, Validators.required),
            'noOfDeals': new FormControl(hotel.noOfDeals, 
              [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    this.placeEditForm = new FormGroup({
      'name': new FormControl(vplaceName, Validators.required),
      'imagePath': new FormControl(vimgPath, Validators.required),
      'description': new FormControl(vDescription, Validators.required),
      'hotels': vhotelList
    });
  }

  onSubmit(){
    if(this.editMode){
      this.placeService.updatePlace(this.placeIndex, this.placeEditForm.value);
    }else{
      this.placeService.addPlace(this.placeEditForm.value);
    }
    this.onNavigateAway();
  }

  addDeals(){
    (<FormArray>this.placeEditForm.get('hotels')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'noOfDeals': new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  removeDeal(index: number){
    (<FormArray>this.placeEditForm.get('hotels')).removeAt(index);
  }

  onNavigateAway(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }
 
}
