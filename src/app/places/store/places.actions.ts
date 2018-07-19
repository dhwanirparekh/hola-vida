import { Action } from "@ngrx/store";
import { Place } from "../place.model";

export const SET_PLACES = 'SET_PLACES';
export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const UPDATE_PLACE = 'UPDATE_PLACE';
export const STORE_PLACES = 'STORE_PLACES';
export const FETCH_PLACES = 'FETCH_PLACES';

export class SetPlaces implements Action {
    readonly type = SET_PLACES;
    constructor(public payload: Place[]) { };
}

export class AddPlace implements Action {
    readonly type = ADD_PLACE;
    constructor(public payload: Place) { };
}

export class DeletePlace implements Action {
    readonly type = DELETE_PLACE;
    constructor(public payload: number) { };
}

export class UpdatePlace implements Action {
    readonly type = UPDATE_PLACE;
    constructor(public payload: {index: number, place: Place}) { };
}

export class StorePlaces implements Action {
    readonly type = STORE_PLACES;
}

export class FetchPlaces implements Action {
    readonly type = FETCH_PLACES;
}

export type PlacesAction = SetPlaces
    | AddPlace
    | DeletePlace
    | UpdatePlace
    | StorePlaces
    | FetchPlaces;