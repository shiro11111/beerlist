
import * as fromBeerList from './list/beer-list.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  beerState: fromBeerList.BeerState;
}

export const reducers: ActionReducerMap<AppState> = {
  beerState: fromBeerList.beerListReducer
};

