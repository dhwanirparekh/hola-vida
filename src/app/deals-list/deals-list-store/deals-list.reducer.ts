import * as DealListActions from './deals-list.actions';
import { Hotel } from '../../shared/hotel.model';


export interface State {
    hotels: Hotel[],
    editingDeal: Hotel,
    editingDealIndex: number
}

const intialState: State = {
    hotels: [
        new Hotel('Della Adventures', 5),
        new Hotel('Club Mahindra', 3),
    ],
    editingDeal: null,
    editingDealIndex: -1
}

export function DealListReducer(state = intialState, action: DealListActions.DealListActions) {

    switch (action.type) {

        case DealListActions.ADD_DEAL:
            return {
                ...state,
                hotels: [...state.hotels, action.payload]
            };

        case DealListActions.ADD_DEALS:
            return {
                ...state,
                hotels: [...state.hotels, ...action.payload]
            };

        case DealListActions.UPDATE_DEAL:
            const dealToBeUpdated = state.hotels[state.editingDealIndex];
            const newDeal = {
                ...dealToBeUpdated,
                ...action.payload
            }
            const dealList = [...state.hotels];
            dealList[state.editingDealIndex] = newDeal;
            return {
                ...state,
                hotels: dealList,
                editingDeal: null,
                editingDealIndex: -1
            };

        case DealListActions.DELETE_DEAL:
            const oldDealList = [...state.hotels];
            oldDealList.splice(state.editingDealIndex, 1);
            return {
                ...state,
                hotels: oldDealList,
                editingDeal: null,
                editingDealIndex: -1
            };

        case DealListActions.START_EDITING:
            const dealToBeEdited = { ...state.hotels[action.payload] };
            return {
                ...state,
                editingDealIndex: action.payload,
                editingDeal: dealToBeEdited
            };

        case DealListActions.STOP_EDITING:
            return {
                ...state,
                editingDealIndex: -1,
                editingDeal: null
            };

        default:
            return state;
    }

}