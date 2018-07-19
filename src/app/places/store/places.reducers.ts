import { Place } from "../place.model";
import { Hotel } from "../../shared/hotel.model";
import * as PlacesAction from './places.actions';
import * as fromApp from '../../store/app.reducer';

export interface FeatureState extends fromApp.AppState {
    places: State;
}

export interface State {
    places: Place[]
}

const initialState: State = {
    places: [
        new Place(
            'Mysore',
            'Mysore officially Mysuru, is the third most populous city in the state of Karnataka, India',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/1280px-Mysore_Palace_Morning.jpg',
            [
                new Hotel('The Leela', 3),
                new Hotel('Club Mahindra', 1)
            ]
        ),
        new Place('Lonavala',
            'Lonavala is a town and a hill station Municipal Council in Pune district in the Indian State of Maharashtra',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lonavalamh.jpg/800px-Lonavalamh.jpg',
            [
                new Hotel('Park Plaza', 5),
                new Hotel('Novotel', 2)
            ]
        )
    ]
}

export function placesReducers(state = initialState, action: PlacesAction.PlacesAction) {

    switch (action.type) {
        case (PlacesAction.SET_PLACES):
            return {
                ...state,
                places: action.payload
            };
        case (PlacesAction.ADD_PLACE):
            return {
                ...state,
                places: [...state.places, action.payload]
            };
        case (PlacesAction.DELETE_PLACE):

            const existingPlaceList = [...state.places];
            existingPlaceList.splice(action.payload, 1);

            return {
                ...state,
                places: existingPlaceList
            };

        case (PlacesAction.UPDATE_PLACE):
            const oldPlace = state.places[action.payload.index];
            const updatedPlace = {
                ...oldPlace,
                ...action.payload.place
            };
            const places = [...state.places];
            places[action.payload.index] = updatedPlace;
            return {
                ...state,
                places: places
            };
       
        default:
            return state;


    }


}