import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Hotel } from '../../shared/hotel.model';
import { DealsService } from '../deals.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deals-edit',
  templateUrl: './deals-edit.component.html',
  styleUrls: ['./deals-edit.component.css']
})
export class DealsEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedHotelDeal: Hotel;

  @ViewChild('dealForm') dealForm: NgForm;

  constructor(private dealsService: DealsService) { }

  ngOnInit() {
    this.subscription = this.dealsService.dealEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedHotelDeal = this.dealsService.getHotel(index);
        this.dealForm.setValue({
          'hotelname': this.editedHotelDeal.name,
          'noofdeals': this.editedHotelDeal.noOfDeals
        });
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(){
    
    const hotelName = this.dealForm.value.hotelname;
    const numOfDeals = this.dealForm.value.noofdeals;
    const newDeal = new Hotel(hotelName,numOfDeals) ;

    if(this.editMode){
      this.dealsService.updateDeal(this.editItemIndex, newDeal); 
    } else{
      this.dealsService.addDeal(newDeal); 
    }
    this.onClear();
  }

  onDelete(){
    this.dealsService.deleteDeal(this.editItemIndex);
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.dealForm.reset();
  }

}
