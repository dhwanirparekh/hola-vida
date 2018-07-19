import { Action } from "@ngrx/store";
import { Hotel } from "../../shared/hotel.model";

export const ADD_DEAL = 'ADD_DEAL';
export const ADD_DEALS = 'ADD_DEALS';
export const UPDATE_DEAL = 'UPDATE_DEAL';
export const DELETE_DEAL = 'DELETE_DEAL';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';

export class AddDeal implements Action {
    readonly type = ADD_DEAL;
    constructor(public payload: Hotel) { }
}

export class AddDeals implements Action {
    readonly type = ADD_DEALS;
    constructor(public payload: Hotel[]) { }
}

export class UpdateDeal implements Action {
    readonly type = UPDATE_DEAL;
    constructor(public payload: Hotel) { }
}

export class DeleteDeal implements Action {
    readonly type = DELETE_DEAL;
    constructor() { }
}

export class StartEditing implements Action {
    readonly type = START_EDITING;
    constructor(public payload: number) { }
}

export class StopEditing implements Action {
    readonly type = STOP_EDITING;
}

export type DealListActions = AddDeal 
| AddDeals 
| UpdateDeal 
| DeleteDeal 
| StartEditing
| StopEditing;