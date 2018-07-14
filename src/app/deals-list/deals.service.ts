import { Hotel } from "../shared/hotel.model";
import { Subject } from "rxjs";

export class DealsService{
    
    dealChanged = new Subject<Hotel[]>();
    dealEditing = new Subject<number>();

    private hotels: Hotel[] = [
        new Hotel('Della Adventures', 5), 
        new Hotel('Club Mahindra', 3),
    ];

    getHotels(){
        return this.hotels.slice();
    }

    getHotel(index: number){
        return this.hotels[index];
    }

    addDeal(deal: Hotel){
        this.hotels.push(deal);
        this.dealChanged.next(this.hotels.slice());
    }

    addDeals(deals: Hotel[]){
        this.hotels.push(...deals);
        this.dealChanged.next(this.hotels.slice());
    }

    updateDeal(index: number, deal: Hotel){
        this.hotels[index] = deal;
        this.dealChanged.next(this.hotels.slice());
    }
    
    deleteDeal(index: number){
        this.hotels.splice(index, 1);
        this.dealChanged.next(this.hotels.slice());
    }

}