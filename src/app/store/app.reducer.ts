import * as fromDealListReducer from '../deals-list/deals-list-store/deals-list.reducer';
import * as fromAuthReducer from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    dealsList: fromDealListReducer.State,
    auth: fromAuthReducer.State
}

export const reducers: ActionReducerMap<AppState> = {
    dealsList: fromDealListReducer.DealListReducer,
    auth: fromAuthReducer.AuthReducer
};
