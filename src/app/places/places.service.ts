import {Place} from './place.model';
import { Injectable } from '@angular/core';
import { Hotel } from '../shared/hotel.model';
import { DealsService } from '../deals-list/deals.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlacesService{

    placeListChanged = new Subject<Place[]>();
    
    constructor(private dealsService: DealsService){

    }
    
    private places: Place[] = [
        new Place(
        'Mysore', 
        'Mysore officially Mysuru, is the third most populous city in the state of Karnataka, India',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/1280px-Mysore_Palace_Morning.jpg',
        [
            new Hotel('The Leela', 3),
            new Hotel('Club Mahindra', 1)
        ]
        ) ,
        new Place('Lonavala', 
        'Lonavala is a town and a hill station Municipal Council in Pune district in the Indian State of Maharashtra',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lonavalamh.jpg/800px-Lonavalamh.jpg',
        [
            new Hotel('Park Plaza', 5),
            new Hotel('Novotel', 2)
        ]
        ) 
      ];

    getPlaces(){
          return this.places.slice();
    }

    addHotelToDealList(hotels: Hotel[]){
          this.dealsService.addDeals(hotels);
    }

    getPlaceAtIndex(placeItemIndex: number){
        return this.places[placeItemIndex];
    }

    addPlace(newplace: Place){
        this.places.push(newplace);
        this.placeListChanged.next(this.places.slice());
    }

    updatePlace(index: number, newplace: Place){
        this.places[index]=newplace;
        this.placeListChanged.next(this.places.slice());
    }

    deletePlace(index: number){
        this.places.splice(index,1);
        this.placeListChanged.next(this.places.slice());
    }

   setPlaces(newplaceList: Place[]){
        this.places = newplaceList;
        this.placeListChanged.next(this.places.slice());
    }
}