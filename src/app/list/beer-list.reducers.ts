import * as ListActions from './beer-list.actions';
import {Item} from '../models/item';


export interface BeerListState {
  list: Item;
}

const initialState: BeerListState = {
  list: null
};

export function beerListReducer(state = initialState, action: ListActions.BeerListActions) {
  switch (action.type) {
    case ListActions.LOAD_BEERLIST:
      return {
        ...state
      };

    case ListActions.LOAD_BEERLIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };

    case ListActions.LOAD_BEERLIST_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
