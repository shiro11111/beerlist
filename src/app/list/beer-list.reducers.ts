import {Item} from '../models/item';
import {
  BeerActions,
  LOAD_BEER,
  LOAD_BEER_FAIL,
  LOAD_BEER_SUCCESS,
  LOAD_BEERLIST,
  LOAD_BEERLIST_FAIL,
  LOAD_BEERLIST_SUCCESS
} from './beer.actions';


export interface BeerState {
  item: Item;
  list: Item[];

}

const initialState: BeerState = {
  item: null,
  list: []
};

export function beerListReducer(state = initialState, action: BeerActions) {
  switch (action.type) {
    case LOAD_BEER:
      return {
        ...state
      };

    case LOAD_BEER_SUCCESS:
      return {
        ...state,
        item: action.payload
      };

    case LOAD_BEER_FAIL:
      return {
        ...state,
      };
    case LOAD_BEERLIST:
      return {
        ...state,
        item: { ...state.item },
        list: { ...state.list }
      };
    case LOAD_BEERLIST_SUCCESS:
      return {
        ...state,
        item: { ...state.item },
        list: action.payload
      };
    case LOAD_BEERLIST_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
