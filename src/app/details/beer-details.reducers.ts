import {Item} from '../models/item';
import {BeerDetailsActions, LOAD_BEER_DETAILS, LOAD_BEER_DETAILS_FAIL, LOAD_BEER_DETAILS_SUCCESS} from './beer-details.actions';


export interface BeerDetailsState {
  item: Item;
}

const initialState: BeerDetailsState = {
  item: null
};

export function beerDetailsReducer(state = initialState, action: BeerDetailsActions) {
  switch (action.type) {
    case LOAD_BEER_DETAILS:
      return {
        ...state,
      };
    case LOAD_BEER_DETAILS_SUCCESS:
      return {
        ...state,
        item: action.payload as Item
      };
    case LOAD_BEER_DETAILS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
