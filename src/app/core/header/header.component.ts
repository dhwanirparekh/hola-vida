import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http'
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dataStorageService: DataStorageService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onSave(){
   
    this.dataStorageService.savePlaces()
    .subscribe(
      (response : Response) => console.log(response.json()),
      (error) => console.log(error)
   );
  }

  onFetch(){
   this.dataStorageService.getPlaces();
  }

  logOut(){
    this.authService.logOut();
  }

}
