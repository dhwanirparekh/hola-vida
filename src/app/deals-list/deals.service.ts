import { Hotel } from "../shared/hotel.model";
import { Subject } from "rxjs";

export class DealsService{
    
    dealAdded = new Subject<Hotel[]>();

    private hotels: Hotel[] = [
        new Hotel('Della Adventures', 5), 
        new Hotel('Club Mahindra', 3),
    ];

    getHotels(){
        return this.hotels.slice();
    }

    addDeal(deal: Hotel){
        this.hotels.push(deal);
        this.dealAdded.next(this.hotels);
    }

    addDeals(deals: Hotel[]){
        this.hotels.push(...deals);
        this.dealAdded.next(this.hotels);
    }
    
}