import { Component, OnInit, OnDestroy } from '@angular/core';
import {Hotel} from '../shared/hotel.model';
import { DealsService } from './deals.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.css'],
  providers: []
})
export class DealsListComponent implements OnInit, OnDestroy {
 
  hotels: Hotel[];
  subscription: Subscription;

  constructor(private dealsService: DealsService) {}

  ngOnInit() {
    this.hotels = this.dealsService.getHotels();
    this.subscription = this.dealsService.dealAdded.subscribe(
      (newhotelsList: Hotel[]) => {
        this.hotels = newhotelsList;
      }
    )

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
