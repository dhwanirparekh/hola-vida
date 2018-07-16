import { Injectable } from "@angular/core";
import { Place } from "../places/place.model";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { PlacesService } from "../places/places.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http: Http, 
        private placesService: PlacesService,
        private authService: AuthService
    ) {}

    savePlaces(){
        const token = this.authService.getToken();
        return this.http.put('https://udemy-ng-http-66fa1.firebaseio.com/places.json?auth='+ token, 
                    this.placesService.getPlaces());
    }

    getPlaces(){
        const token = this.authService.getToken();
        return this.http.get('https://udemy-ng-http-66fa1.firebaseio.com/places.json?auth='+ token)
        .map(
            (response: Response) => {
                const places: Place[] = response.json();
                for(let place of places){
                    if(!place['hotels']){
                        console.log(place);
                        place['hotels'] = [];
                    }
                }
                return places;
            } 
        )
        .subscribe(
            (places: Place[]) => {
                this.placesService.setPlaces(places);
            },
            (error) => console.log(error)
        );
    }
}