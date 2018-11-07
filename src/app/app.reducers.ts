
import * as fromBeerList from './list/beer-list.reducers';
import {ActionReducerMap} from '@ngrx/store';
import * as fromBeerDetails from './details/beer-details.reducers';

export interface AppState {
  beerState: fromBeerList.BeerState;
  detailsState: fromBeerDetails.BeerDetailsState;
}

export const reducers: ActionReducerMap<AppState> = {
  beerState: fromBeerList.beerListReducer,
  detailsState: fromBeerDetails.beerDetailsReducer
};

