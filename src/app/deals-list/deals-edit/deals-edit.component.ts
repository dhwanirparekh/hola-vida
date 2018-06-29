import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Hotel } from '../../shared/hotel.model';

@Component({
  selector: 'app-deals-edit',
  templateUrl: './deals-edit.component.html',
  styleUrls: ['./deals-edit.component.css']
})
export class DealsEditComponent implements OnInit {

  @ViewChild('hotelNameInput') hotelNameInputRef : ElementRef;
  @ViewChild('noOfDealsInput') noOfDealsInputRef : ElementRef;

  @Output() dealAdded = new EventEmitter<Hotel>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    console.log("emitting deal added");
    const hotelName = this.hotelNameInputRef.nativeElement.value;
    const numOfDeals = this.noOfDealsInputRef.nativeElement.value;
    const newDeal = new Hotel(hotelName,numOfDeals) ;
    this.dealAdded.emit(newDeal); 
    return false;
  }

  onDelete(){

  }

  onClear(){
    
  }

}
