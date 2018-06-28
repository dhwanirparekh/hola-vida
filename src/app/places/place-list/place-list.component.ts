import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places: Place[] = [
    new Place('Mysore', 'Mysore officially Mysuru, is the third most populous city in the state of Karnataka, India',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/1280px-Mysore_Palace_Morning.jpg') ,
    new Place('Lonavala', 'Lonavala is a town and a hill station Municipal Council in Pune district in the Indian State of Maharashtra',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lonavalamh.jpg/800px-Lonavalamh.jpg') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
