import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { HeaderComponent } from './header/header.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { PlaceDetailsComponent } from './places/place-details/place-details.component';
import { PlaceItemComponent } from './places/place-list/place-item/place-item.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealsEditComponent } from './deals-list/deals-edit/deals-edit.component';
import {DropDownDirective} from './shared/dropdown.directive';
import { DealsService } from './deals-list/deals.service';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    HeaderComponent,
    PlaceListComponent,
    PlaceDetailsComponent,
    PlaceItemComponent,
    DealsListComponent,
    DealsEditComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
