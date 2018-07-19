import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Hotel } from '../../shared/hotel.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as DealListActions from '../deals-list-store/deals-list.actions';
import * as fromDealList from '../../store/app.reducer';

@Component({
  selector: 'app-deals-edit',
  templateUrl: './deals-edit.component.html',
  styleUrls: ['./deals-edit.component.css']
})
export class DealsEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode = false;
  editedHotelDeal: Hotel;

  @ViewChild('dealForm') dealForm: NgForm;

  constructor(private store: Store<fromDealList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('dealsList').subscribe(
      data => {
        if(data.editingDealIndex >-1){
          this.editMode = true;
          this.editedHotelDeal = data.editingDeal;
          this.dealForm.setValue({
            'hotelname': this.editedHotelDeal.name,
            'noofdeals': this.editedHotelDeal.noOfDeals
          });
        } else{
          this.editMode = false;
        }
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.store.dispatch(new DealListActions.StopEditing());
  }

  onSubmit(){
    
    const hotelName = this.dealForm.value.hotelname;
    const numOfDeals = this.dealForm.value.noofdeals;
    const newDeal = new Hotel(hotelName,numOfDeals) ;

    if(this.editMode){
      this.store.dispatch(new DealListActions.UpdateDeal(newDeal));
    } else{
      this.store.dispatch(new DealListActions.AddDeal(newDeal));
    }
    this.onClear();
  }

  onDelete(){
    this.store.dispatch(new DealListActions.DeleteDeal());
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.dealForm.reset();
  }

}
