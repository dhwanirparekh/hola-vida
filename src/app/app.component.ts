import { Component, OnInit } from '@angular/core';
import * as firbase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firbase.initializeApp(
      {
        apiKey: "AIzaSyBHcrQhYDCncmgDE5L6g7Dkkv8lBjh0Fl0",
        authDomain: "udemy-ng-http-66fa1.firebaseapp.com"
      }
    )
  }
}
