import { Component, OnInit } from '@angular/core';
import {Hotel} from '../shared/hotel.model';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.css']
})
export class DealsListComponent implements OnInit {
 
  hotels: Hotel[] = [
    new Hotel('Della Adventures', 5), 
    new Hotel('Club Mahindra', 3),
  ];

  constructor() { }

  ngOnInit() {
    console.log("Again intializing Hotel list");
  }

  addDealToList(newDeal: Hotel){
    console.log("Added - " + newDeal.name);
    this.hotels.push(newDeal);
  }

}
