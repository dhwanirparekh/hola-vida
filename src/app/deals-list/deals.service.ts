import { Hotel } from "../shared/hotel.model";
import { EventEmitter } from "@angular/core";

export class DealsService{
    
    dealAdded = new EventEmitter<Hotel[]>();

    private hotels: Hotel[] = [
        new Hotel('Della Adventures', 5), 
        new Hotel('Club Mahindra', 3),
    ];

    getHotels(){
        return this.hotels.slice();
    }

    addDeal(deal: Hotel){
        this.hotels.push(deal);
        this.dealAdded.emit(this.hotels);
    }

    addDeals(deals: Hotel[]){
        this.hotels.push(...deals);
        this.dealAdded.emit(this.hotels);
    }
    
}