import { NgModule } from "@angular/core";
import { DealsEditComponent } from "./deals-edit/deals-edit.component";
import { DealsListComponent } from "./deals-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DealsEditComponent,
        DealsListComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
})
export class DealsModule{}