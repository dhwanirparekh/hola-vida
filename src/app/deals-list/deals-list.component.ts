import { Component, OnInit } from '@angular/core';
import {Hotel} from '../shared/hotel.model';
import { DealsService } from './deals.service';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.css'],
  providers: []
})
export class DealsListComponent implements OnInit {
 
  hotels: Hotel[];

  constructor(private dealsService: DealsService) {}

  ngOnInit() {
    this.hotels = this.dealsService.getHotels();
    this.dealsService.dealAdded.subscribe(
      (newhotelsList: Hotel[]) => {
        this.hotels = newhotelsList;
      }
    )

  }

}
