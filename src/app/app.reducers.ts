
import * as fromBeerList from './list/beer-list.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  beerList: fromBeerList.BeerListState;
}

export const reducers: ActionReducerMap<AppState> = {
  beerList: fromBeerList.beerListReducer
}

