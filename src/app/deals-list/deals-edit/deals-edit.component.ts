import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Hotel } from '../../shared/hotel.model';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-deals-edit',
  templateUrl: './deals-edit.component.html',
  styleUrls: ['./deals-edit.component.css']
})
export class DealsEditComponent implements OnInit {

  @ViewChild('hotelNameInput') hotelNameInputRef : ElementRef;
  @ViewChild('noOfDealsInput') noOfDealsInputRef : ElementRef;

  constructor(private dealsService: DealsService) { }

  ngOnInit() {
  }

  onAdd(){
    
    const hotelName = this.hotelNameInputRef.nativeElement.value;
    const numOfDeals = this.noOfDealsInputRef.nativeElement.value;
    const newDeal = new Hotel(hotelName,numOfDeals) ;
    
    this.dealsService.addDeal(newDeal); 

    return false;
  }

  onDelete(){

  }

  onClear(){
    
  }

}
