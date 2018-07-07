import {Hotel} from "../shared/hotel.model";

export class Place{
   
    public name: string;
    public description: string;
    public imagePath: string;
    public hotels: Hotel[];

    constructor(name: string, desc: string, imagePath: string, hotels: Hotel[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.hotels = hotels;
    }
}